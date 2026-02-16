'use client'

import { motion } from 'framer-motion'
import { narratorVoices } from '@/lib/mock-data'
import { containerVariants, itemVariants } from '@/lib/motion'

interface StepReviewProps {
  genre: string
  style: string
  mood: string
  narrator: string
}

export function StepReview({
  genre,
  style,
  mood,
  narrator,
}: StepReviewProps) {
  const narratorName = narratorVoices.find((v) => v.id === narrator)?.name

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: 40 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Ready to create?
        </h2>
        <p className="text-muted-foreground">
          Here's what your story will be like
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        className="space-y-3"
      >
        <motion.div
          variants={itemVariants}
          className="glass-effect p-4 rounded-lg border border-white/10"
        >
          <p className="text-xs text-muted-foreground mb-1">GENRE</p>
          <p className="text-lg font-semibold text-foreground">{genre}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-effect p-4 rounded-lg border border-white/10"
        >
          <p className="text-xs text-muted-foreground mb-1">STYLE</p>
          <p className="text-lg font-semibold text-foreground">{style}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-effect p-4 rounded-lg border border-white/10"
        >
          <p className="text-xs text-muted-foreground mb-1">MOOD</p>
          <p className="text-lg font-semibold text-foreground">{mood}</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-effect p-4 rounded-lg border border-white/10"
        >
          <p className="text-xs text-muted-foreground mb-1">NARRATOR</p>
          <p className="text-lg font-semibold text-foreground">
            {narratorName}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
