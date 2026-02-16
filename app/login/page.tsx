'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LoginPage() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  }

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%'],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10"
        variants={backgroundVariants}
        animate="animate"
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              hsl(var(--border)) 49px,
              hsl(var(--border)) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              hsl(var(--border)) 49px,
              hsl(var(--border)) 50px
            )
          `,
        }} />
      </div>

      {/* Content */}
      <motion.div
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-md px-4"
      >
        <motion.div
          variants={cardVariants}
          className="glass-effect rounded-2xl p-8 border border-white/10 backdrop-blur-xl"
        >
          {/* Logo & Title */}
          <motion.div variants={textVariants} className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-effect mb-4 mx-auto">
              <span className="text-3xl">🎧</span>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              EchoTales
            </h1>
            <p className="text-sm text-muted-foreground">
              Create AI audiobooks made just for you
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={textVariants}
            className="text-center text-foreground/70 mb-8 text-sm leading-relaxed"
          >
            Create immersive 15-minute audio stories in seconds
          </motion.p>

          {/* Buttons */}
          <div className="space-y-3">
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/home" className="block">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-semibold rounded-lg smooth-transition"
                >
                  Continue with Google
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/home" className="block">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 text-foreground hover:bg-white/5 font-semibold rounded-lg smooth-transition bg-transparent"
                >
                  Continue with Email
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.p
            variants={textVariants}
            className="text-center text-xs text-muted-foreground mt-6"
          >
            By continuing, you agree to our Terms of Service and Privacy
            Policy
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}
