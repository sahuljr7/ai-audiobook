'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { StepProgress } from '@/components/create/step-progress'
import { StepGenre } from '@/components/create/step-genre'
import { StepStyle } from '@/components/create/step-style'
import { StepMood } from '@/components/create/step-mood'
import { StepNarrator } from '@/components/create/step-narrator'
import { StepReview } from '@/components/create/step-review'
import Link from 'next/link'

const STEP_NAMES = ['Genre', 'Style', 'Mood', 'Narrator', 'Review']

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    genre: '',
    style: '',
    mood: '',
    narrator: '',
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const handleNext = () => {
    if (currentStep < STEP_NAMES.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate generation delay
    setTimeout(() => {
      // Redirect to generating page
      window.location.href = '/generating'
    }, 500)
  }

  const isStepValid = () => {
    const { genre, style, mood, narrator } = formData
    switch (currentStep) {
      case 0:
        return genre !== ''
      case 1:
        return style !== ''
      case 2:
        return mood !== ''
      case 3:
        return narrator !== ''
      case 4:
        return genre && style && mood && narrator
      default:
        return false
    }
  }

  const isFormComplete =
    formData.genre &&
    formData.style &&
    formData.mood &&
    formData.narrator

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <StepProgress
            currentStep={currentStep}
            totalSteps={STEP_NAMES.length}
            stepNames={STEP_NAMES}
          />
        </motion.div>

        {/* Steps */}
        <div className="min-h-[400px] mb-8">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <StepGenre
                key="genre"
                selected={formData.genre}
                onSelect={(genre) =>
                  setFormData({ ...formData, genre })
                }
              />
            )}
            {currentStep === 1 && (
              <StepStyle
                key="style"
                selected={formData.style}
                onSelect={(style) =>
                  setFormData({ ...formData, style })
                }
              />
            )}
            {currentStep === 2 && (
              <StepMood
                key="mood"
                selected={formData.mood}
                onSelect={(mood) =>
                  setFormData({ ...formData, mood })
                }
              />
            )}
            {currentStep === 3 && (
              <StepNarrator
                key="narrator"
                selected={formData.narrator}
                onSelect={(narrator) =>
                  setFormData({ ...formData, narrator })
                }
              />
            )}
            {currentStep === 4 && (
              <StepReview
                key="review"
                genre={formData.genre}
                style={formData.style}
                mood={formData.mood}
                narrator={formData.narrator}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 justify-between"
        >
          <div>
            {currentStep > 0 ? (
              <Button
                onClick={handlePrev}
                variant="outline"
                className="border-white/20 text-foreground hover:bg-white/5 smooth-transition bg-transparent"
              >
                Previous
              </Button>
            ) : (
              <Link href="/home">
                <Button
                  variant="outline"
                  className="border-white/20 text-foreground hover:bg-white/5 smooth-transition bg-transparent"
                >
                  Back
                </Button>
              </Link>
            )}
          </div>

          <div>
            {currentStep === STEP_NAMES.length - 1 ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleGenerate}
                  disabled={!isFormComplete || isGenerating}
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold smooth-transition glow-effect disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Generate My Story'}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold smooth-transition glow-effect disabled:opacity-50"
                >
                  Next
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
