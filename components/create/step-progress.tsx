'use client'

import { motion } from 'framer-motion'

interface StepProgressProps {
  currentStep: number
  totalSteps: number
  stepNames: string[]
}

export function StepProgress({
  currentStep,
  totalSteps,
  stepNames,
}: StepProgressProps) {
  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-cyan-500"
          animate={{
            width: `${((currentStep + 1) / totalSteps) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex justify-between">
        {stepNames.map((name, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                idx === currentStep
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white glow-effect'
                  : idx < currentStep
                    ? 'bg-violet-500/20 text-violet-400'
                    : 'bg-white/5 text-muted-foreground'
              }`}
              animate={{
                scale: idx === currentStep ? 1.1 : 1,
              }}
            >
              {idx + 1}
            </motion.div>
            <span className="text-xs text-muted-foreground text-center max-w-[60px]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
