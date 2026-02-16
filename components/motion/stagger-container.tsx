'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { containerVariants } from '@/lib/motion'

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
}

export function StaggerContainer({
  children,
  delay = 0.2,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}
