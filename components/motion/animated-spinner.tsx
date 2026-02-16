'use client'

import { motion } from 'framer-motion'

export function AnimatedSpinner() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className="flex gap-2 justify-center items-center"
      variants={containerVariants}
      animate="animate"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
          variants={dotVariants}
          initial="initial"
        />
      ))}
    </motion.div>
  )
}
