"use client"

import { useState, useEffect } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { toast } from "react-toastify"
import { Loader2, AlertCircle } from "lucide-react"
import { calculateProfileCompletion } from "@/lib/profile-completion"
import { Alert, AlertDescription } from "@/components/ui/alert"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  bio: z.string().max(500, { message: "Bio must not exceed 500 characters" }).optional(),
  location: z.string().max(100, { message: "Location must not exceed 100 characters" }).optional(),
  website: z.string().max(200, { message: "Website must not exceed 200 characters" }).optional(),
  isPublic: z.boolean().default(true),
})

interface ProfileSettingsProps {
  user: {
    id: string
    name: string
    email: string
    image?: string
    bio?: string
    location?: string
    website?: string
    isPublic?: boolean
  }
}

export default function ProfileSettings({ user }: ProfileSettingsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [profileCompletion, setProfileCompletion] = useState<ReturnType<typeof calculateProfileCompletion> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      bio: user.bio || "",
      location: user.location || "",
      website: user.website || "",
      isPublic: user.isPublic !== false, // Default to true if not specified
    },
  })

  // Calculate profile completion on mount and when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      setProfileCompletion(calculateProfileCompletion({ ...user, ...value }))
    })

    // Initial calculation
    setProfileCompletion(calculateProfileCompletion(user))

    return () => subscription.unsubscribe()
  }, [form, user])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      toast.success("Profile updated successfully")

      // Update profile completion after successful update
      setProfileCompletion(calculateProfileCompletion({ ...user, ...values }))
    } catch (error) {
      toast.error("Failed to update profile")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      {profileCompletion && profileCompletion.percentage < 100 && (
        <Alert className="mb-6 bg-amber-50 dark:bg-amber-950/30">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <AlertDescription>
            Your profile is {profileCompletion.percentage}% complete. Fill in the missing information to improve your
            profile.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Bio</FormLabel>
                {profileCompletion?.incompleteFields.includes("Bio") && (
                  <span className="text-xs text-amber-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Recommended
                  </span>
                )}
              </div>
              <FormControl>
                <Textarea
                  placeholder="Tell us a bit about yourself"
                  className="resize-none"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>Share your interest in the Balti language or your background.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Location</FormLabel>
                {profileCompletion?.incompleteFields.includes("Location") && (
                  <span className="text-xs text-amber-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Recommended
                  </span>
                )}
              </div>
              <FormControl>
                <Input placeholder="Your location" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>Where you're based (optional).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Website</FormLabel>
                {profileCompletion?.incompleteFields.includes("Website") && (
                  <span className="text-xs text-amber-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Recommended
                  </span>
                )}
              </div>
              <FormControl>
                <Input placeholder="https://your-website.com" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>Your personal website or social media (optional).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isPublic"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Public Profile</FormLabel>
                <FormDescription>Allow other users to view your profile and contribution statistics.</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} disabled={isLoading} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </form>
    </Form>
  )
}
