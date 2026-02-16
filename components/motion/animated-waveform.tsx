'use client'

import { motion } from 'framer-motion'

interface AnimatedWaveformProps {
  isPlaying?: boolean
  color?: 'violet' | 'cyan'
}

export function AnimatedWaveform({
  isPlaying = true,
  color = 'violet',
}: AnimatedWaveformProps) {
  const colorClass =
    color === 'cyan' ? 'text-cyan-500' : 'text-violet-500'

  const barVariants = {
    animate: {
      height: ['100%', '30%', '80%', '20%', '100%'],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    initial: {
      height: '50%',
    },
  }

  return (
    <motion.div
      className={`flex items-end justify-center gap-1 h-12 ${colorClass}`}
      animate={isPlaying ? 'animate' : 'initial'}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-current rounded-full"
          variants={barVariants}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  )
}
