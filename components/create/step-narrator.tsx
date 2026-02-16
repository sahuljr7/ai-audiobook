'use client'

import { motion } from 'framer-motion'
import { narratorVoices } from '@/lib/mock-data'
import { containerVariants, itemVariants } from '@/lib/motion'
import { AnimatedWaveform } from '@/components/motion/animated-waveform'

interface StepNarratorProps {
  selected: string
  onSelect: (narrator: string) => void
}

export function StepNarrator({ selected, onSelect }: StepNarratorProps) {
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
          Choose your narrator
        </h2>
        <p className="text-muted-foreground">
          Select the voice that brings your story to life
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
      >
        {narratorVoices.map((voice) => (
          <motion.button
            key={voice.id}
            variants={itemVariants}
            onClick={() => onSelect(voice.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg smooth-transition border-2 transition-all text-left ${
              selected === voice.id
                ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-cyan-500 glow-effect-cyan'
                : 'bg-white/5 border-white/10 hover:border-cyan-500/50'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground">
                  {voice.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {voice.gender}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-xl"
              >
                ▶
              </motion.div>
            </div>
            <div className="mt-3 flex justify-center">
              <AnimatedWaveform
                isPlaying={selected === voice.id}
                color={selected === voice.id ? 'cyan' : 'violet'}
              />
            </div>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
