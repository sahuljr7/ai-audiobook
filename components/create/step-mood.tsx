'use client'

import { motion } from 'framer-motion'
import { moods } from '@/lib/mock-data'
import { containerVariants, itemVariants } from '@/lib/motion'

interface StepMoodProps {
  selected: string
  onSelect: (mood: string) => void
}

export function StepMood({ selected, onSelect }: StepMoodProps) {
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
          What's the mood?
        </h2>
        <p className="text-muted-foreground">
          Set the emotional tone of your story
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        variants={containerVariants}
      >
        {moods.map((mood) => (
          <motion.button
            key={mood.label}
            variants={itemVariants}
            onClick={() => onSelect(mood.label)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`p-4 rounded-lg font-semibold smooth-transition border-2 transition-all flex flex-col items-center gap-2 ${
              selected === mood.label
                ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-violet-500 glow-effect text-foreground'
                : 'bg-white/5 border-white/10 text-muted-foreground hover:border-violet-500/50'
            }`}
          >
            <motion.span
              className="text-2xl"
              animate={selected === mood.label ? { scale: 1.2 } : {}}
              transition={selected === mood.label ? { duration: 0.3 } : {}}
            >
              {mood.emoji}
            </motion.span>
            {mood.label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
