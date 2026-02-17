'use client'

import { motion } from 'framer-motion'
import { MarketingNav } from '@/components/marketing-nav'
import Link from 'next/link'
import { Check } from 'lucide-react'

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

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = React.useState<'monthly' | 'yearly'>('monthly')

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
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Simple, Transparent Pricing</h1>
            <p className="text-xl text-foreground/70">Choose the plan that works best for you</p>

            {/* Billing Toggle */}
            <div className="flex justify-center pt-4">
              <div className="glass-effect p-1 rounded-lg border border-white/10 flex">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md font-semibold smooth-transition ${
                    billingPeriod === 'monthly'
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md font-semibold smooth-transition ${
                    billingPeriod === 'yearly'
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Free Plan */}
            <motion.div
              variants={itemVariants}
              className="glass-effect border border-white/10 rounded-xl p-8 hover:border-white/20 smooth-transition flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-foreground/70">/month</span>
                </div>
                <p className="text-foreground/70 text-sm mt-2">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {freeFeatures.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login">
                  <button className="w-full border border-white/20 hover:border-violet-500/50 text-foreground font-semibold py-3 rounded-lg smooth-transition hover:bg-white/5">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              variants={itemVariants}
              className="glass-effect border-2 border-gradient-to-r from-violet-500 to-cyan-500 rounded-xl p-8 relative flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Recommended
                </span>
              </div>

              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {billingPeriod === 'monthly' ? '$9.99' : '$95.88'}
                  </span>
                  <span className="text-foreground/70">/month</span>
                </div>
                <p className="text-foreground/70 text-sm mt-2">
                  {billingPeriod === 'monthly' ? 'Billed monthly' : 'Billed annually (save $12/year)'}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {premiumFeatures.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login">
                  <button className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg smooth-transition glow-effect">
                    Upgrade Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Feature Comparison
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 font-bold">Feature</th>
                    <th className="text-center px-6 py-4 font-bold">Free</th>
                    <th className="text-center px-6 py-4 font-bold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                      <td className="px-6 py-4 text-foreground/70">{feature.name}</td>
                      <td className="text-center px-6 py-4">
                        {feature.free ? (
                          <Check className="w-5 h-5 text-cyan-400 inline" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="text-center px-6 py-4">
                        <Check className="w-5 h-5 text-violet-400 inline" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl border border-white/10"
              >
                <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
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
            <h2 className="text-3xl font-bold">Ready to Upgrade Your Experience?</h2>
            <p className="text-foreground/70 text-lg">Start with our free plan and upgrade anytime.</p>
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
    </main>
  )
}

import React from 'react'

const freeFeatures = [
  'Basic reading tracking',
  'Limited badges',
  'Standard quotes',
  'Limited audiobook analytics',
  'Up to 5 completed books tracked',
]

const premiumFeatures = [
  'Unlimited tracking',
  'Advanced analytics',
  'Exclusive badges',
  'Ad-free experience',
  'Personalized quote engine',
  'Early access to new features',
  'Priority customer support',
  'Unlimited audiobook storage',
]

const comparisonFeatures = [
  { name: 'Basic Reading Tracking', free: true },
  { name: 'Reading History', free: true },
  { name: 'Badge System', free: true },
  { name: 'Listening Analytics', free: false },
  { name: 'Advanced Analytics Dashboard', free: false },
  { name: 'Ad-Free Experience', free: false },
  { name: 'Personalized Quotes', free: false },
  { name: 'Premium Badges', free: false },
  { name: 'Priority Support', free: false },
  { name: 'Early Feature Access', free: false },
]

const faqs = [
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes! You can upgrade to premium or downgrade to free anytime. Changes take effect immediately in your dashboard.',
  },
  {
    question: 'Is there a free trial for premium?',
    answer: 'Start with our free plan to explore all the core features. If you need premium functionality, upgrade anytime.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'All your reading history, badges, and progress are saved. If you upgrade back later, everything will be restored.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 7-day money-back guarantee for premium memberships if you\'re not satisfied.',
  },
  {
    question: 'Are there discounts for annual billing?',
    answer: 'Yes! Choose yearly billing to save 20% compared to monthly plans.',
  },
  {
    question: 'Can teams purchase premium licenses?',
    answer: 'Yes, we offer special team pricing. Contact our sales team for enterprise or bulk purchase options.',
  },
]
