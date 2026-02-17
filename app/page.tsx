'use client'

import { motion } from 'framer-motion'
import { MarketingNav } from '@/components/marketing-nav'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <MarketingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold gradient-text text-balance"
            >
              Create Immersive Audiobooks in Seconds
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance"
            >
              Transform your stories into professionally narrated audiobooks with AI. Build reading streaks, earn rewards, and unlock a premium listening experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login">
                  <button className="bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-semibold px-8 py-4 rounded-lg smooth-transition glow-effect">
                    Get Started
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/pricing">
                  <button className="border border-white/20 hover:border-violet-500/50 text-foreground font-semibold px-8 py-4 rounded-lg smooth-transition hover:bg-white/5">
                    View Pricing
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold mb-4">What is EchoTales?</h2>
              <p className="text-foreground/70 text-lg">
                EchoTales is an AI-powered audiobook creation platform that transforms written stories into immersive audio experiences. With intelligent gamification and personalized engagement features, we help you build a consistent reading habit while enjoying premium audiobooks.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3">Perfect for:</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>{'✓ Book enthusiasts seeking premium audiobook experiences'}</li>
                <li>{'✓ Readers wanting to build consistent reading habits'}</li>
                <li>{'✓ Story creators looking to publish their work'}</li>
                <li>{'✓ Anyone who wants to track their reading progress with gamification'}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-foreground/70 text-lg">Everything you need to enjoy and track audiobooks</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-violet-500/50 smooth-transition"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-foreground/70 text-lg">Join thousands of audiobook enthusiasts and start building your reading streak today.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/login">
                <button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg smooth-transition glow-effect">
                  Get Started Free
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">EchoTales</h3>
              <p className="text-foreground/70 text-sm">AI-powered audiobook creation and tracking.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li><Link href="/login" className="hover:text-foreground smooth-transition">Get Started</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground smooth-transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li><Link href="/about" className="hover:text-foreground smooth-transition">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li><a href="#" className="hover:text-foreground smooth-transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground smooth-transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-foreground/50 text-sm">
            <p>&copy; 2024 EchoTales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: '📚',
    title: 'Reading Progress Tracking',
    description: 'Keep track of your listening time, reading history, and completed books.',
  },
  {
    icon: '🎯',
    title: 'Reward Points & Gamification',
    description: 'Earn points for every book completed and unlock exclusive badges.',
  },
  {
    icon: '📊',
    title: 'Listening Analytics',
    description: 'Detailed insights into your listening habits and preferences.',
  },
  {
    icon: '🔥',
    title: 'Reading Streak Tracking',
    description: 'Maintain your reading streak and challenge yourself daily.',
  },
  {
    icon: '💭',
    title: 'Personalized Quotes',
    description: 'Daily inspiration from curated quotes across genres.',
  },
  {
    icon: '👑',
    title: 'Premium Membership',
    description: 'Unlock exclusive features and ad-free listening experience.',
  },
]

