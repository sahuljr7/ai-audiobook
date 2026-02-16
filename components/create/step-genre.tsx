'use client'

import { motion } from 'framer-motion'
import { genres } from '@/lib/mock-data'
import { containerVariants, itemVariants } from '@/lib/motion'

interface StepGenreProps {
  selected: string
  onSelect: (genre: string) => void
}

export function StepGenre({ selected, onSelect }: StepGenreProps) {
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
          What genre speaks to you?
        </h2>
        <p className="text-muted-foreground">
          Choose the type of story you want to create
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        variants={containerVariants}
      >
        {genres.map((genre) => (
          <motion.button
            key={genre}
            variants={itemVariants}
            onClick={() => onSelect(genre)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg font-semibold smooth-transition border-2 transition-all ${
              selected === genre
                ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-violet-500 glow-effect text-foreground'
                : 'bg-white/5 border-white/10 text-muted-foreground hover:border-violet-500/50'
            }`}
          >
            {genre}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
