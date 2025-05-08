"use client"

import ActivityLogList from "./activity-log-list"

export default function ActivityWrapper({ limit }: { limit: number }) {
  return <ActivityLogList limit={limit} />
}

