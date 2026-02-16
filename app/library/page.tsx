'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { mockStories } from '@/lib/mock-data'
import Link from 'next/link'
import { containerVariants, itemVariants } from '@/lib/motion'

const gradients = [
  'from-violet-600 to-blue-600',
  'from-cyan-600 to-blue-600',
  'from-green-600 to-emerald-600',
  'from-pink-600 to-rose-600',
  'from-amber-600 to-orange-600',
  'from-purple-600 to-pink-600',
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Your Stories
          </h1>
          <p className="text-muted-foreground">
            Explore all your created audio stories
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockStories.map((story) => (
            <Link key={story.id} href={`/story/${story.id}`}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-lg overflow-hidden border border-white/10 backdrop-blur-xl cursor-pointer group smooth-transition hover:border-violet-500/50 glow-effect"
              >
                {/* Thumbnail */}
                <div
                  className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradients[parseInt(story.id) % gradients.length]} group-hover:scale-110 smooth-transition`}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      ▶
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-violet-400 smooth-transition">
                      {story.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {story.genre} • {story.duration} min
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {story.summary}
                  </p>

                  <div className="flex gap-2 flex-wrap pt-2">
                    <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                      {story.mood}
                    </span>
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                      {story.style}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Empty State */}
        {mockStories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No stories yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Create your first story to get started
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/create">
                <button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg smooth-transition glow-effect">
                  Create a Story
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
