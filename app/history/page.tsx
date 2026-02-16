'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Header } from '@/components/header'
import { mockStories, mockUser } from '@/lib/mock-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const completedStories = mockUser.completedBooks
    .map((book) => {
      const story = mockStories.find((s) => s.id === book.storyId)
      return story ? { ...story, ...book } : null
    })
    .filter(Boolean) as any[]

  const inProgressStories = mockStories.slice(3, 5)

  const filteredCompleted = completedStories.filter((story) => {
    const matchesSearch = story.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || story.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const filteredInProgress = inProgressStories.filter((story) => {
    const matchesSearch = story.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || story.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const allGenres = ['all', ...new Set(mockStories.map((s) => s.genre))]

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      <motion.main
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Reading History
          </h1>
          <p className="text-foreground/70 text-lg">
            Track your reading journey and explore your completed books
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={itemVariants}
          className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
            />
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a0f2e] border-white/10">
                {allGenres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre === 'all' ? 'All Genres' : genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a0f2e] border-white/10">
                <SelectItem value="recent">Recently Completed</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10 rounded-lg p-1">
              <TabsTrigger value="completed">
                Completed ({filteredCompleted.length})
              </TabsTrigger>
              <TabsTrigger value="inprogress">
                In Progress ({filteredInProgress.length})
              </TabsTrigger>
            </TabsList>

            {/* Completed Books */}
            <TabsContent value="completed" className="mt-8">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredCompleted.length > 0 ? (
                  filteredCompleted.map((story, idx) => (
                    <motion.div
                      key={story.id}
                      variants={itemVariants}
                      className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:border-violet-500/50 smooth-transition group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <Link href={`/story/${story.id}`}>
                            <h3 className="text-lg font-semibold mb-2 hover:gradient-text smooth-transition">
                              {story.title}
                            </h3>
                          </Link>
                          <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
                            {story.summary}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{story.genre}</Badge>
                            <Badge variant="outline">
                              {new Date(story.completedDate).toLocaleDateString()}
                            </Badge>
                            <Badge variant="outline">{story.mood}</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {story.rating}
                            </div>
                            <p className="text-xs text-foreground/60">Rating</p>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white"
                          >
                            <Link href={`/story/${story.id}`}>Listen Again</Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    variants={itemVariants}
                    className="glass-effect rounded-xl p-12 border border-white/10 backdrop-blur-xl text-center"
                  >
                    <p className="text-foreground/70 mb-4">No completed books found</p>
                    <Link href="/library">
                      <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white">
                        Start Reading
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>

            {/* In Progress */}
            <TabsContent value="inprogress" className="mt-8">
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredInProgress.length > 0 ? (
                  filteredInProgress.map((story) => (
                    <motion.div
                      key={story.id}
                      variants={itemVariants}
                      className="glass-effect rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:border-cyan-500/50 smooth-transition"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <Link href={`/story/${story.id}`}>
                            <h3 className="text-lg font-semibold mb-2 hover:gradient-text smooth-transition">
                              {story.title}
                            </h3>
                          </Link>
                          <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
                            {story.summary}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{story.genre}</Badge>
                            <Badge
                              variant="outline"
                              className="bg-cyan-500/20 border-cyan-500/50 text-cyan-200"
                            >
                              35% Complete
                            </Badge>
                          </div>
                        </div>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                        >
                          <Link href={`/story/${story.id}`}>Continue</Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    variants={itemVariants}
                    className="glass-effect rounded-xl p-12 border border-white/10 backdrop-blur-xl text-center"
                  >
                    <p className="text-foreground/70 mb-4">No books in progress</p>
                    <Link href="/library">
                      <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white">
                        Browse Library
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.main>
    </div>
  )
}
