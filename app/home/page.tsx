'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { CTAButton } from '@/components/cta-button'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const featureVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Parallax background */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
                <span className="gradient-text">Your personal</span>{' '}
                <span className="text-foreground">AI storyteller</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
            >
              Create immersive 15-minute audio stories in seconds. Choose your
              genre, mood, and narrator, then let our AI craft your perfect
              story.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Link href="/create">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-6 rounded-lg smooth-transition glow-effect"
                >
                  Create a new story
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Features Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Generate complete stories in seconds, not hours',
              },
              {
                icon: '🎨',
                title: 'Fully Customizable',
                description:
                  'Choose genre, mood, style, and narrator voice to match your vision',
              },
              {
                icon: '🎧',
                title: 'Cinematic Audio',
                description:
                  'Professional narration with dynamic, immersive soundscapes',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={featureVariants}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-xl border border-white/10 backdrop-blur-xl group hover:border-violet-500/50 smooth-transition"
              >
                <motion.div
                  className="text-4xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-2xl border border-white/10 backdrop-blur-xl text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to create your first story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Start your journey into endless storytelling possibilities
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/create">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-lg smooth-transition glow-effect"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground"
          >
            <p>© 2024 EchoTales. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-foreground smooth-transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground smooth-transition">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
