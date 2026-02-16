'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { mockUser, mockStories } from '@/lib/mock-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function ProfilePage() {
  const getCompletedStory = (storyId: string) => mockStories.find((s) => s.id === storyId)
  const nextLevelPoints = Math.ceil(mockUser.rewardPoints / 500) * 500 + 500
  const pointsProgress = (mockUser.rewardPoints % 500) / 5

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      <motion.main
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Header */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
              {mockUser.name}
            </h1>
            <p className="text-foreground/70">Member since {mockUser.joinedDate}</p>
          </div>
          {mockUser.isPremium && (
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-600 glow-effect"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">👑</span>
              <span className="font-semibold">Premium Member</span>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            {
              label: 'Reward Points',
              value: mockUser.rewardPoints.toLocaleString(),
              icon: '⭐',
            },
            {
              label: 'Current Streak',
              value: `${mockUser.currentStreak} days`,
              icon: '🔥',
            },
            {
              label: 'Listening Hours',
              value: `${mockUser.totalListeningHours}h`,
              icon: '🎧',
            },
            {
              label: 'Books Completed',
              value: mockUser.completedBooks.length,
              icon: '📚',
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-effect rounded-xl p-4 border border-white/10 backdrop-blur-xl"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-foreground/70 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reward Points Progress */}
        <motion.div
          variants={itemVariants}
          className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">⭐</span> Reward Points Progress
            </h2>
            <span className="text-foreground/70">
              {mockUser.rewardPoints} / {nextLevelPoints}
            </span>
          </div>
          <Progress value={pointsProgress} className="h-2 mb-2" />
          <p className="text-sm text-foreground/60">
            {nextLevelPoints - mockUser.rewardPoints} points until next level
          </p>
        </motion.div>

        {/* Tabs for Badges, Completed Books, and Analytics */}
        <motion.div variants={itemVariants} className="mb-12">
          <Tabs defaultValue="badges" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-lg p-1">
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="completed">Completed Books</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Badges Tab */}
            <TabsContent value="badges" className="mt-6">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {mockUser.badges.map((badge, idx) => (
                  <motion.div
                    key={badge.id}
                    variants={itemVariants}
                    className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl text-center group hover:border-violet-500/50 smooth-transition"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="text-5xl mb-3 mx-auto"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    >
                      {badge.emoji}
                    </motion.div>
                    <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                    <p className="text-xs text-foreground/60 mb-2">{badge.description}</p>
                    <p className="text-xs text-violet-400">
                      Unlocked: {new Date(badge.unlockedDate).toLocaleDateString()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Completed Books Tab */}
            <TabsContent value="completed" className="mt-6">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {mockUser.completedBooks.map((book, idx) => {
                  const story = getCompletedStory(book.storyId)
                  if (!story) return null

                  return (
                    <motion.div
                      key={book.storyId}
                      variants={itemVariants}
                      className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:border-violet-500/50 smooth-transition"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">{story.genre}</Badge>
                            <Badge variant="outline">
                              {new Date(book.completedDate).toLocaleDateString()}
                            </Badge>
                          </div>
                          <div className="text-sm text-foreground/60">
                            <p>Time spent: {book.totalTimeSpent} minutes</p>
                            <p>Listening duration: {book.listeningTime} minutes</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold gradient-text">
                            {book.rating}
                          </div>
                          <p className="text-sm text-foreground/60">Rating</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-6">
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Reading Streak */}
                <motion.div
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔥</span> Reading Streak
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-foreground/70 text-sm mb-1">Current Streak</p>
                      <p className="text-3xl font-bold gradient-text">
                        {mockUser.currentStreak}
                      </p>
                      <p className="text-xs text-foreground/60">days</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-foreground/70 text-sm mb-1">Longest Streak</p>
                      <p className="text-3xl font-bold gradient-text">
                        {mockUser.longestStreak}
                      </p>
                      <p className="text-xs text-foreground/60">days</p>
                    </div>
                  </div>
                </motion.div>

                {/* Listening Analytics */}
                <motion.div
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎧</span> Listening Analytics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/70">Total Listening Time</span>
                        <span className="font-semibold">
                          {mockUser.totalListeningHours.toFixed(1)} hours
                        </span>
                      </div>
                      <Progress
                        value={Math.min((mockUser.totalListeningHours / 100) * 100, 100)}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/70">Average Daily Listening</span>
                        <span className="font-semibold">
                          {(mockUser.totalListeningHours / 90).toFixed(1)} hours/day
                        </span>
                      </div>
                      <Progress
                        value={Math.min(
                          ((mockUser.totalListeningHours / 90) / 2) * 100,
                          100
                        )}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/70">Longest Session</span>
                        <span className="font-semibold">3.5 hours</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Link href="/library" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold py-6 rounded-lg glow-effect">
              Continue Reading
            </Button>
          </Link>
          <Link href="/create" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-white/20 text-foreground hover:bg-white/5 font-semibold py-6 rounded-lg"
            >
              Create New Story
            </Button>
          </Link>
        </motion.div>
      </motion.main>
    </div>
  )
}
