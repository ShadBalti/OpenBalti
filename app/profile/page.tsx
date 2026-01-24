import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { generateMetadata } from "@/lib/metadata"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ActivityLogList from "@/components/activity/activity-log-list"
import { Separator } from "@/components/ui/separator"

export const metadata = generateMetadata("Your Profile", "View your account and recent activity")

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/profile")
  }

  const user = session.user
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U"

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Profile</h1>
          <p className="text-muted-foreground">Manage your account and view your activity</p>
        </div>

        <Card className="border-primary/20 overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-primary/5 to-primary/0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarImage src={user.image || ""} alt={user.name || "User"} />
                  <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-col sm:flex-row">
                <Button asChild variant="outline" size="sm">
                  <Link href="/settings">Edit Profile</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={`/users/${user.id}`}>View Public Profile</Link>
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Separator className="my-2" />

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Your Recent Activity</h2>
            <p className="text-muted-foreground">
              Track your contributions and interactions with the OpenBalti dictionary community
            </p>
          </div>
          <ActivityLogList userId={user.id} limit={15} />
        </section>
      </div>
    </div>
  )
}
