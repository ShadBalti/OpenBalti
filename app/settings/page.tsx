import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { generateMetadata } from "@/lib/metadata"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileSettings from "@/components/settings/profile-settings"
import AccountSettings from "@/components/settings/account-settings"

export const metadata = generateMetadata("Settings", "Manage your OpenBalti account settings and preferences.")

/**
 * Renders the user settings page, which allows authenticated users to manage their profile
 * and account settings. It uses a tabbed interface to separate profile information from account actions.
 * This is a server component that fetches the session and redirects if the user is not authenticated.
 *
 * @returns {Promise<JSX.Element>} The rendered settings page.
 */
export default async function SettingsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/settings")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your profile, account security, and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-6">
                <ProfileSettings user={session.user} />
              </TabsContent>
              <TabsContent value="account" className="mt-6">
                <AccountSettings user={session.user} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
