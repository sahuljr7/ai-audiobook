'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  Headphones,
  HeartHandshake,
  Quote,
  Sparkles,
  Trophy,
  Wand2,
} from 'lucide-react'

import { Header } from '@/components/header'
import { CTAButton } from '@/components/cta-button'
import { Button } from '@/components/ui/button'
import { mockQuotes, mockStories, mockUser } from '@/lib/mock-data'

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

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

  const features = [
    {
      icon: Sparkles,
      title: 'Instant stories that fit your day',
      description:
        'Generate a complete, immersive 15‑minute story when you want it—commute, break, or bedtime.',
    },
    {
      icon: Wand2,
      title: 'Your vibe, your voice',
      description:
        'Pick genre, mood, style, and narrator to match exactly how you want it to feel.',
    },
    {
      icon: Headphones,
      title: 'Cinematic listening experience',
      description:
        'High‑impact narration and sound‑forward storytelling—built to keep you engaged from start to finish.',
    },
    {
      icon: Trophy,
      title: 'Streaks & rewards that motivate',
      description:
        'Build a daily listening habit with streaks, rewards, and achievements that make progress feel great.',
    },
    {
      icon: Quote,
      title: 'Inspiration on demand',
      description:
        'Discover prompts and quotes that nudge you into the next story—especially when you’re stuck.',
    },
    {
      icon: HeartHandshake,
      title: 'Designed for focus & comfort',
      description:
        'Thoughtful UX, gentle motion, and theme support so you can enjoy stories day or night.',
    },
  ] as const

  const steps = [
    {
      title: 'Choose your vibe',
      description: 'Pick a genre, mood, and style that matches your moment.',
      icon: Sparkles,
    },
    {
      title: 'Select a narrator',
      description: 'Choose a voice that makes the story feel real.',
      icon: Headphones,
    },
    {
      title: 'Generate & enjoy',
      description: 'Get a fresh 15‑minute story—perfectly tailored to you.',
      icon: Wand2,
    },
  ] as const

  const useCases = [
    {
      title: 'Commute companion',
      description:
        'Turn dead time into a mini‑adventure. Short, satisfying stories that fit the ride.',
      icon: Clock,
    },
    {
      title: 'Wind‑down ritual',
      description:
        'Cozy narration and calming moods help you relax without scrolling.',
      icon: HeartHandshake,
    },
    {
      title: 'Creative spark',
      description:
        'Test tones and plot vibes fast—great for writers, creators, and idea‑hunters.',
      icon: Sparkles,
    },
    {
      title: 'Daily habit building',
      description:
        'Streaks and rewards make it easier to show up consistently and feel progress.',
      icon: Trophy,
    },
  ] as const

  const recentStories = mockStories.slice(0, 3)
  const featuredQuote = mockQuotes[0]

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <motion.div
          className="absolute inset-0 z-0"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
          }
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.2) 0%, transparent 50%)`,
            backgroundSize: '200% 200%',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-7"
            >
              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Welcome back,{' '}
                  <span className="text-foreground font-medium">
                    {mockUser.name.split(' ')[0]}
                  </span>
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  <span className="gradient-text">Create</span>{' '}
                  <span className="text-foreground">a story</span> that fits
                  your mood in{' '}
                  <span className="gradient-text">minutes</span>.
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed"
              >
                EchoTales turns your choices—genre, mood, style, narrator—into a
                short, cinematic audio experience. Build a streak, earn rewards,
                and make listening a daily ritual.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:items-center"
              >
                <CTAButton text="Create a new story" href="/create" pulse />
                <div className="flex gap-3">
                  <Link href="/library">
                    <Button variant="outline" className="bg-background/60">
                      Browse Library
                    </Button>
                  </Link>
                  <Link href="/quotes">
                    <Button variant="ghost">Get Inspired</Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
              >
                {[
                  {
                    label: 'Current streak',
                    value: `${mockUser.currentStreak} days`,
                    icon: Trophy,
                  },
                  {
                    label: 'Reward points',
                    value: `${mockUser.rewardPoints.toLocaleString()}`,
                    icon: Sparkles,
                  },
                  {
                    label: 'Listening hours',
                    value: `${mockUser.totalListeningHours}+`,
                    icon: Headphones,
                  },
                  {
                    label: 'Stories completed',
                    value: `${mockUser.completedBooks.length}`,
                    icon: BookOpen,
                  },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="glass-effect rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Icon className="h-4 w-4" />
                        <span>{stat.label}</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold text-foreground">
                        {stat.value}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right-side preview */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-5"
            >
              <div className="glass-effect rounded-2xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Today’s vibe</p>
                      <p className="text-xs text-muted-foreground">
                        Quick pick → better story
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">~15 min</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Genre', value: 'Mystery' },
                    { label: 'Mood', value: 'Cozy' },
                    { label: 'Style', value: 'Slow burn' },
                    { label: 'Narrator', value: 'Calm Female' },
                  ].map((chip) => (
                    <div
                      key={chip.label}
                      className="rounded-xl border border-border bg-background/40 p-3"
                    >
                      <p className="text-xs text-muted-foreground">
                        {chip.label}
                      </p>
                      <p className="text-sm font-medium">{chip.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                      <Quote className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground leading-relaxed">
                        “{featuredQuote.text}”
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {featuredQuote.author}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/create" className="flex-1">
                    <Button className="w-full">Start from this vibe</Button>
                  </Link>
                  <Link href="/quotes" className="flex-1">
                    <Button variant="outline" className="w-full">
                      More inspiration
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute top-24 right-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-24 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, 20, 0],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </>
        )}
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Feature Highlights */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything you need to love listening again
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              EchoTales is built to turn small moments into meaningful stories.
              Faster creation, deeper immersion, and habit‑friendly motivation.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={featureVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="glass-effect p-6 rounded-2xl backdrop-blur-xl group hover:border-primary/40 smooth-transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* How it works */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                How it works
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A clean, guided flow that takes you from “I want something
                interesting” to “I’m already listening.”
              </p>
            </div>
            <Link href="/create">
              <Button variant="outline" className="bg-background/60">
                Open the creator
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.6,
                    delay: shouldReduceMotion ? 0 : idx * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        Step {idx + 1}
                      </p>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Use cases */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Built for real life
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Not just features—outcomes. EchoTales helps you turn moments into a
              habit you actually look forward to.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => {
              const Icon = u.icon
              return (
                <motion.div
                  key={u.title}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  className="glass-effect rounded-2xl p-6 smooth-transition"
                >
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {u.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Continue */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Continue your journey
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Jump back into your recent stories—or explore inspiration to
                find your next favorite vibe.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/library">
                <Button variant="outline" className="bg-background/60">
                  View Library
                </Button>
              </Link>
              <Link href="/history">
                <Button variant="ghost">History</Button>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {recentStories.map((story) => (
                <Link key={story.id} href={`/story/${story.id}`}>
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                    className="glass-effect rounded-2xl p-6 h-full smooth-transition hover:border-primary/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {story.genre} • {story.mood}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {story.duration}m
                      </span>
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80">
                      <Headphones className="h-4 w-4" />
                      <span>Open story</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="glass-effect rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center">
                    <Quote className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Daily spark</p>
                    <p className="text-xs text-muted-foreground">
                      A small nudge toward your next story
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  “{featuredQuote.text}”
                </p>
                <p className="text-xs text-muted-foreground">
                  — {featuredQuote.author}
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <Link href="/quotes">
                    <Button className="w-full">Explore inspiration</Button>
                  </Link>
                  <Link href="/create">
                    <Button variant="outline" className="w-full">
                      Create a story now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="glass-effect p-10 sm:p-12 rounded-3xl backdrop-blur-xl text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Your next favorite story is one choice away.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pick a vibe, generate a short cinematic story, and turn listening
              into a habit that feels effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton text="Create a new story" href="/create" />
              <Link href="/library">
                <Button variant="outline" className="bg-background/60">
                  Browse Library
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-border">
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
