'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatedWaveform } from '@/components/motion/animated-waveform'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const QUOTES = [
  'Weaving your story...',
  'Choosing the perfect voice...',
  'Creating cinematic audio...',
  'Polishing every word...',
  'Bringing your world to life...',
]

export default function GeneratingPage() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Rotate quotes every 3 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length)
    }, 3000)

    // Fake progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30
        if (next >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return next
      })
    }, 500)

    // Complete after 8 seconds
    const completeTimeout = setTimeout(() => {
      setIsComplete(true)
      setProgress(100)
    }, 8000)

    return () => {
      clearInterval(quoteInterval)
      clearInterval(progressInterval)
      clearTimeout(completeTimeout)
    }
  }, [])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.2) 0%, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 max-w-md"
      >
        {/* Waveform animation */}
        <motion.div
          variants={itemVariants}
          className="w-32 h-32 flex items-center justify-center"
        >
          <div className="absolute w-32 h-32 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AnimatedWaveform isPlaying={true} color="violet" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-3xl font-bold gradient-text">
            Creating Your Story
          </h1>

          {/* Rotating quotes */}
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground"
          >
            {QUOTES[currentQuote]}
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          variants={itemVariants}
          className="w-full space-y-2"
        >
          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-cyan-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-right">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>

        {/* Completion message */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 w-full"
            >
              <motion.div
                className="text-5xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                🎉
              </motion.div>
              <p className="text-xl font-semibold text-foreground">
                Your story is ready!
              </p>
              <Link href="/library" className="block">
                <Button
                  className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold rounded-lg smooth-transition glow-effect"
                  asChild
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Listen Now
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-32 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  )
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
