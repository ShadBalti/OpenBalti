"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Check, MessageSquare, Award, AlertCircle, Trash2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Notification {
  id: string
  type: "comment" | "feedback" | "badge" | "review" | "mention"
  title: string
  description: string
  relatedTo?: string
  relatedId?: string
  isRead: boolean
  createdAt: string
  actionUrl?: string
}

interface NotificationCenterProps {
  compact?: boolean
  limit?: number
}

const typeConfig = {
  comment: { icon: MessageSquare, color: "bg-blue-500/10 text-blue-700", label: "Comment" },
  feedback: { icon: AlertCircle, color: "bg-yellow-500/10 text-yellow-700", label: "Feedback" },
  badge: { icon: Award, color: "bg-purple-500/10 text-purple-700", label: "Achievement" },
  review: { icon: Check, color: "bg-green-500/10 text-green-700", label: "Review" },
  mention: { icon: MessageSquare, color: "bg-pink-500/10 text-pink-700", label: "Mention" },
}

export default function NotificationCenter({ compact = false, limit = 5 }: NotificationCenterProps) {
  const { data: session } = useSession()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (session?.user?.id) {
      fetchNotifications()
    }
  }, [session?.user?.id])

  const fetchNotifications = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/notifications?limit=20")
      const result = await response.json()

      if (result.success) {
        setNotifications(result.data)
        setUnreadCount(result.data.filter((n: Notification) => !n.isRead).length)
      }
    } catch (error) {
      console.error("Error fetching notifications:", error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (notificationId: string) => {
    try {
      await fetch(`/api/notifications/${notificationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      })
      setNotifications(notifications.map(n => 
        n.id === notificationId ? { ...n, isRead: true } : n
      ))
      setUnreadCount(Math.max(0, unreadCount - 1))
    } catch (error) {
      console.error("Error marking notification as read:", error)
    }
  }

  const deleteNotification = async (notificationId: string) => {
    try {
      await fetch(`/api/notifications/${notificationId}`, { method: "DELETE" })
      setNotifications(notifications.filter(n => n.id !== notificationId))
    } catch (error) {
      console.error("Error deleting notification:", error)
    }
  }

  if (!session) {
    return null
  }

  const displayNotifications = compact ? notifications.slice(0, limit) : notifications

  if (compact) {
    return (
      <div className="space-y-2">
        {unreadCount > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-4 w-4" />
            <span className="text-sm font-medium">{unreadCount} new notification{unreadCount !== 1 ? 's' : ''}</span>
          </div>
        )}
        {displayNotifications.length === 0 ? (
          <p className="text-sm text-muted-foreground">No notifications yet</p>
        ) : (
          displayNotifications.map((notification) => {
            const config = typeConfig[notification.type]
            const Icon = config.icon
            return (
              <div key={notification.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className={`p-2 rounded-full ${config.color}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{notification.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{notification.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                  </p>
                </div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="flex-shrink-0 h-2 w-2 bg-primary rounded-full"
                    aria-label="Mark as read"
                  />
                )}
              </div>
            )
          })
        )}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            {unreadCount > 0 && <Badge className="ml-2">{unreadCount} unread</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading...</p>
        ) : displayNotifications.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">No notifications yet</p>
        ) : (
          <div className="space-y-3">
            {displayNotifications.map((notification) => {
              const config = typeConfig[notification.type]
              const Icon = config.icon
              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                    notification.isRead ? 'bg-background' : 'bg-primary/5 border-primary/20'
                  }`}
                >
                  <div className={`p-2 rounded-full ${config.color} flex-shrink-0`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                        </p>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        {!notification.isRead && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            aria-label="Mark as read"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          aria-label="Delete notification"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {notification.actionUrl && (
                      <Button variant="link" size="sm" className="mt-2" asChild>
                        <a href={notification.actionUrl}>View</a>
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
