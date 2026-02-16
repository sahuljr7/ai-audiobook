'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/mock-data'
import { containerVariants, itemVariants } from '@/lib/motion'

interface StepStyleProps {
  selected: string
  onSelect: (style: string) => void
}

export function StepStyle({ selected, onSelect }: StepStyleProps) {
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
          What's your preferred style?
        </h2>
        <p className="text-muted-foreground">
          How should the story unfold?
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        variants={containerVariants}
      >
        {styles.map((style) => (
          <motion.button
            key={style}
            variants={itemVariants}
            onClick={() => onSelect(style)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg font-semibold smooth-transition border-2 transition-all text-left ${
              selected === style
                ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-cyan-500 glow-effect-cyan text-foreground'
                : 'bg-white/5 border-white/10 text-muted-foreground hover:border-cyan-500/50'
            }`}
          >
            {style}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
