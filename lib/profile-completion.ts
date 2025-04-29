import type { IUser } from "@/models/User"

interface ProfileField {
  name: string
  key: string | string[]
  weight: number
  completed: (user: any) => boolean
}

export function calculateProfileCompletion(user: Partial<IUser>): {
  percentage: number
  completedFields: string[]
  incompleteFields: string[]
  nextSteps: { field: string; description: string }[]
} {
  if (!user) {
    return {
      percentage: 0,
      completedFields: [],
      incompleteFields: [],
      nextSteps: [],
    }
  }

  // Define the fields that contribute to profile completion
  const profileFields: ProfileField[] = [
    {
      name: "Profile Picture",
      key: "image",
      weight: 15,
      completed: (user) => !!user.image,
    },
    {
      name: "Name",
      key: "name",
      weight: 10, // Required but still counts
      completed: (user) => !!user.name && user.name.length > 1,
    },
    {
      name: "Bio",
      key: "bio",
      weight: 25,
      completed: (user) => !!user.bio && user.bio.length >= 30, // Minimum meaningful bio
    },
    {
      name: "Location",
      key: "location",
      weight: 15,
      completed: (user) => !!user.location && user.location.length > 0,
    },
    {
      name: "Website",
      key: "website",
      weight: 15,
      completed: (user) => !!user.website && user.website.length > 0,
    },
    {
      name: "Public Profile",
      key: "isPublic",
      weight: 10,
      completed: (user) => user.isPublic !== undefined, // User has made a choice
    },
    {
      name: "Email Verified",
      key: "emailVerified",
      weight: 10,
      completed: (user) => !!user.emailVerified,
    },
  ]

  // Calculate which fields are completed
  const completedFields: string[] = []
  const incompleteFields: string[] = []
  let totalWeight = 0
  let completedWeight = 0

  profileFields.forEach((field) => {
    totalWeight += field.weight
    if (field.completed(user)) {
      completedFields.push(field.name)
      completedWeight += field.weight
    } else {
      incompleteFields.push(field.name)
    }
  })

  // Calculate percentage
  const percentage = Math.round((completedWeight / totalWeight) * 100)

  // Generate next steps for incomplete fields
  const nextSteps = incompleteFields.map((fieldName) => {
    const field = profileFields.find((f) => f.name === fieldName)
    if (!field) return { field: fieldName, description: `Add your ${fieldName.toLowerCase()}` }

    switch (field.name) {
      case "Profile Picture":
        return {
          field: fieldName,
          description: "Add a profile picture to help others recognize you",
        }
      case "Bio":
        return {
          field: fieldName,
          description: "Write a short bio about yourself and your interest in the Balti language",
        }
      case "Location":
        return {
          field: fieldName,
          description: "Share your location to connect with others in your area",
        }
      case "Website":
        return {
          field: fieldName,
          description: "Add your personal website or social media profiles",
        }
      case "Public Profile":
        return {
          field: fieldName,
          description: "Choose whether to make your profile public or private",
        }
      case "Email Verified":
        return {
          field: fieldName,
          description: "Verify your email address to secure your account",
        }
      default:
        return {
          field: fieldName,
          description: `Add your ${fieldName.toLowerCase()}`,
        }
    }
  })

  return {
    percentage,
    completedFields,
    incompleteFields,
    nextSteps,
  }
}
