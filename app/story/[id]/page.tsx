'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { mockStories } from '@/lib/mock-data'
import Link from 'next/link'
import { AnimatedWaveform } from '@/components/motion/animated-waveform'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

const gradients = [
  'from-violet-600 to-blue-600',
  'from-cyan-600 to-blue-600',
  'from-green-600 to-emerald-600',
  'from-pink-600 to-rose-600',
  'from-amber-600 to-orange-600',
  'from-purple-600 to-pink-600',
]

export default function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const story = mockStories.find((s) => s.id === id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(80)

  if (!story) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Story not found</h1>
          <Link href="/library">
            <Button className="mt-4">Back to Library</Button>
          </Link>
        </div>
      </div>
    )
  }

  const duration = story.duration * 60 // Convert to seconds
  const formattedTime = `${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}`
  const formattedDuration = `${story.duration}:00`

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/library">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition">
              ← Back to Library
            </button>
          </Link>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-xl space-y-8"
        >
          {/* Story info */}
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            {/* Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${gradients[parseInt(story.id) % gradients.length]} group`}
            >
              <motion.div
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div className="text-5xl" animate={{ scale: [1, 1.2, 1] }}>
                  🎧
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Story details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {story.title}
                </h1>
                <p className="text-muted-foreground">{story.genre}</p>
              </div>

              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg border border-white/10">
                  <p className="text-xs text-muted-foreground mb-1">STYLE</p>
                  <p className="font-semibold text-foreground">{story.style}</p>
                </div>
                <div className="glass-effect p-4 rounded-lg border border-white/10">
                  <p className="text-xs text-muted-foreground mb-1">MOOD</p>
                  <p className="font-semibold text-foreground">{story.mood}</p>
                </div>
                <div className="glass-effect p-4 rounded-lg border border-white/10 col-span-2">
                  <p className="text-xs text-muted-foreground mb-1">NARRATOR</p>
                  <p className="font-semibold text-foreground">{story.narrator}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Player */}
          <div className="space-y-6 border-t border-white/10 pt-8">
            {/* Waveform */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <AnimatedWaveform
                isPlaying={isPlaying}
                color={isPlaying ? 'cyan' : 'violet'}
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <Slider
                value={[currentTime]}
                onValueChange={(value) => setCurrentTime(value[0])}
                max={duration}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formattedTime}</span>
                <span>{formattedDuration}</span>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl opacity-60 hover:opacity-100 smooth-transition"
              >
                ⏮
              </motion.button>

              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-2xl text-white glow-effect hover:shadow-lg smooth-transition"
              >
                {isPlaying ? '⏸' : '▶'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl opacity-60 hover:opacity-100 smooth-transition"
              >
                ⏭
              </motion.button>
            </motion.div>

            {/* Volume control */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 max-w-xs mx-auto"
            >
              <span className="text-lg">🔊</span>
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-8">
                {volume}%
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockStories
              .filter((s) => s.id !== story.id)
              .slice(0, 3)
              .map((relatedStory) => (
                <Link key={relatedStory.id} href={`/story/${relatedStory.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="glass-effect rounded-lg overflow-hidden border border-white/10 backdrop-blur-xl cursor-pointer group smooth-transition hover:border-violet-500/50"
                  >
                    <div
                      className={`relative h-32 overflow-hidden bg-gradient-to-br ${gradients[parseInt(relatedStory.id) % gradients.length]} group-hover:scale-110 smooth-transition`}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-violet-400 smooth-transition">
                        {relatedStory.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {relatedStory.genre}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
