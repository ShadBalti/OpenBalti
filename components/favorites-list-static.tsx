"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FavoritesListStatic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Favorites</CardTitle>
        <CardDescription>Sign in to view and manage your favorite Balti words</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center py-8">
        <Button asChild>
          <Link href="/auth/signin?callbackUrl=/favorites">Sign In</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
