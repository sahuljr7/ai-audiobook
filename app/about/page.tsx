'use client'

import { motion } from 'framer-motion'
import { MarketingNav } from '@/components/marketing-nav'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MarketingNav />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About EchoTales</h1>
            <p className="text-xl text-foreground/70">Empowering readers to build lasting habits through AI and gamification</p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-4">
                We believe that everyone deserves access to exceptional audiobooks that inspire, educate, and entertain. EchoTales was created with a simple mission: to make audiobook listening more engaging, rewarding, and part of a daily habit.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Through intelligent gamification and personalized engagement, we transform the reading experience from a passive activity into an exciting journey of achievement and discovery.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            How It Works
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-violet-500/50 smooth-transition"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500">
                      <span className="text-white font-bold text-lg">{idx + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Core Features Explained
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl border border-white/10"
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-foreground/70 mb-4">{feature.description}</p>
                    <ul className="space-y-2 text-foreground/70">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-violet-400">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose EchoTales?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl border border-white/10 hover:border-violet-500/50 smooth-transition"
              >
                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-foreground/70">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Join the EchoTales Community</h2>
            <p className="text-foreground/70 text-lg">Start your audiobook journey today and discover a world of immersive stories.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/login">
                <button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg smooth-transition glow-effect">
                  Get Started Free
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const steps = [
  {
    title: 'Create an Account',
    description: 'Sign up with your email and personalize your profile to start tracking your reading journey.',
  },
  {
    title: 'Track Reading Progress',
    description: 'Listen to audiobooks and automatically track your progress, time spent, and completion status.',
  },
  {
    title: 'Earn Points & Badges',
    description: 'Complete books, maintain streaks, and unlock achievements to earn reward points and exclusive badges.',
  },
  {
    title: 'Maintain Reading Streaks',
    description: 'Build consistency with daily listening goals and watch your reading streak grow over time.',
  },
  {
    title: 'Unlock Premium Features',
    description: 'Access exclusive content, advanced analytics, and ad-free listening with a premium membership.',
  },
]

const coreFeatures = [
  {
    icon: '📊',
    title: 'Reward System',
    description: 'Earn points for every audiobook completed and unlock exclusive rewards.',
    points: [
      'Points awarded for completed books',
      'Redeemable rewards and exclusive content',
      'Leaderboards and achievement milestones',
      'Special bonuses for streak maintenance',
    ],
  },
  {
    icon: '🏆',
    title: 'Badges & Achievements',
    description: 'Unlock unique badges as you reach milestones and build your reading habit.',
    points: [
      'First Book Completed badge',
      '7-Day and 30-Day Reading Streaks',
      'Genre Explorer achievements',
      'Premium member exclusive badges',
    ],
  },
  {
    icon: '📈',
    title: 'Audiobook Tracking',
    description: 'Get detailed insights into your listening habits and preferences.',
    points: [
      'Total listening hours tracked',
      'Genre preferences and statistics',
      'Reading history and completed books',
      'Daily and monthly listening trends',
    ],
  },
  {
    icon: '📖',
    title: 'Reading History',
    description: 'Access your complete reading history with ratings and detailed analytics.',
    points: [
      'Complete book library with ratings',
      'Search and filter by genre',
      'Reading timeline and statistics',
      'Quick resume or restart books',
    ],
  },
]

const whyChoose = [
  {
    title: 'Clean & Distraction-Free',
    description: 'Enjoy a beautifully designed interface that puts focus on your reading experience.',
  },
  {
    title: 'Gamification Done Right',
    description: 'Motivation through achievements, streaks, and rewards without being overwhelming.',
  },
  {
    title: 'Personalized Engagement',
    description: 'Get recommendations and personalized quotes tailored to your reading preferences.',
  },
  {
    title: 'Premium Experience',
    description: 'Ad-free listening, advanced analytics, and exclusive features for premium members.',
  },
  {
    title: 'Community Driven',
    description: 'Join thousands of audiobook enthusiasts and build reading habits together.',
  },
  {
    title: 'AI-Powered Creation',
    description: 'Transform stories into professional audiobooks with cutting-edge AI technology.',
  },
]
