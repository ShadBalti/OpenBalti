import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community - OpenBalti",
  description: "Join the OpenBalti community! See live activity, trending words, top contributors, and contribute to preserving the Balti language.",
  keywords: "Balti community, contributors, leaderboard, activity feed, language preservation",
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
