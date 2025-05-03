import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordFeedback from "@/models/WordFeedback"
import WordComment from "@/models/WordComment"
import User from "@/models/User"

export async function GET() {
  try {
    await dbConnect()

    // Get total counts
    const [totalWords, totalUsers, totalFeedback, totalComments, usefulWords, trustedWords, reviewWords] =
      await Promise.all([
        Word.countDocuments(),
        User.countDocuments(),
        WordFeedback.countDocuments(),
        WordComment.countDocuments(),
        Word.countDocuments({ "feedbackStats.useful": { $gt: 0 } }),
        Word.countDocuments({ "feedbackStats.trusted": { $gt: 0 } }),
        Word.countDocuments({ "feedbackStats.needsReview": { $gt: 0 } }),
      ])

    // Get top contributors
    const topContributors = await User.aggregate([
      {
        $lookup: {
          from: "words",
          localField: "_id",
          foreignField: "createdBy",
          as: "wordsCreated",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          image: 1,
          wordCount: { $size: "$wordsCreated" },
        },
      },
      { $sort: { wordCount: -1 } },
      { $limit: 5 },
    ])

    // Get most active users (by feedback and comments)
    const mostActiveUsers = await User.aggregate([
      {
        $lookup: {
          from: "wordfeedbacks",
          localField: "_id",
          foreignField: "userId",
          as: "feedbacks",
        },
      },
      {
        $lookup: {
          from: "wordcomments",
          localField: "_id",
          foreignField: "userId",
          as: "comments",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          image: 1,
          activityCount: {
            $add: [{ $size: "$feedbacks" }, { $size: "$comments" }],
          },
        },
      },
      { $sort: { activityCount: -1 } },
      { $limit: 5 },
    ])

    return NextResponse.json({
      success: true,
      data: {
        totalWords,
        totalUsers,
        totalFeedback,
        totalComments,
        usefulWords,
        trustedWords,
        reviewWords,
        topContributors,
        mostActiveUsers,
      },
    })
  } catch (error) {
    console.error("Error fetching community stats:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch community statistics" }, { status: 500 })
  }
}
