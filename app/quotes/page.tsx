'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { mockQuotes, mockUser } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const quoteCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function QuotesPage() {
  const [savedQuotes, setSavedQuotes] = useState<string[]>([])
  const [dailyQuote, setDailyQuote] = useState(mockQuotes[0])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    // Set daily quote based on date
    const day = new Date().getDate()
    const quote = mockQuotes[day % mockQuotes.length]
    setDailyQuote(quote)
  }, [])

  const categories = [
    'all',
    'motivational',
    'relatable',
    'philosophical',
    'romance',
    'thriller',
    'fantasy',
  ]

  const filteredQuotes =
    selectedCategory === 'all'
      ? mockQuotes
      : mockQuotes.filter((q) => q.category === selectedCategory)

  const toggleSaveQuote = (quoteId: string) => {
    setSavedQuotes((prev) =>
      prev.includes(quoteId) ? prev.filter((id) => id !== quoteId) : [...prev, quoteId]
    )
  }

  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      motivational: '⚡',
      relatable: '💭',
      philosophical: '🎓',
      romance: '💝',
      thriller: '🔪',
      fantasy: '✨',
    }
    return emojiMap[category] || '✨'
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      <motion.main
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Inspiration Hub
          </h1>
          <p className="text-foreground/70 text-lg">
            Daily quotes and inspiration to fuel your reading journey
          </p>
        </motion.div>

        {/* Daily Quote */}
        <motion.div
          variants={itemVariants}
          className="mb-12 relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-lg" />
          <motion.div
            className="relative glass-effect rounded-xl p-8 sm:p-12 border border-white/10 backdrop-blur-xl"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💡
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6 text-balance">
                {dailyQuote.text}
              </h2>
              <p className="text-foreground/70 text-lg">— {dailyQuote.author}</p>
              <div className="mt-6">
                <Badge className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-0">
                  Today's Quote
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold smooth-transition ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white glow-effect'
                  : 'bg-white/5 border border-white/10 text-foreground hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all'
                ? 'All Quotes'
                : `${getCategoryEmoji(category)} ${category.charAt(0).toUpperCase() + category.slice(1)}`}
            </motion.button>
          ))}
        </motion.div>

        {/* Quotes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredQuotes.map((quote) => (
            <motion.div
              key={quote.id}
              variants={quoteCardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl p-8 border border-white/10 backdrop-blur-xl hover:border-violet-500/50 smooth-transition"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 mb-4">
                  <p className="text-lg font-medium text-foreground mb-4 leading-relaxed">
                    "{quote.text}"
                  </p>
                  <p className="text-foreground/70">— {quote.author}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-white/5">
                      {getCategoryEmoji(quote.category)} {quote.category}
                    </Badge>
                    {quote.genre && (
                      <Badge variant="outline" className="bg-white/5">
                        {quote.genre}
                      </Badge>
                    )}
                  </div>
                  <motion.button
                    onClick={() => toggleSaveQuote(quote.id)}
                    className={`text-2xl smooth-transition ${
                      savedQuotes.includes(quote.id) ? 'scale-110' : ''
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {savedQuotes.includes(quote.id) ? '❤️' : '🤍'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Saved Quotes Section */}
        {savedQuotes.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">❤️</span>
              Your Saved Quotes ({savedQuotes.length})
            </h2>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {mockQuotes
                .filter((q) => savedQuotes.includes(q.id))
                .map((quote) => (
                  <motion.div
                    key={quote.id}
                    variants={itemVariants}
                    className="glass-effect rounded-xl p-6 border border-violet-500/50 backdrop-blur-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10"
                  >
                    <p className="text-lg font-medium text-foreground mb-2">
                      "{quote.text}"
                    </p>
                    <p className="text-foreground/70 text-sm">— {quote.author}</p>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        )}

        {/* Share Section */}
        <motion.div
          variants={itemVariants}
          className="glass-effect rounded-xl p-8 border border-white/10 backdrop-blur-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Share Your Inspiration</h3>
          <p className="text-foreground/70 mb-6">
            Save your favorite quotes and share them with the community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-lg glow-effect">
              Share Saved Quotes
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-foreground hover:bg-white/5 font-semibold px-8 py-6 rounded-lg"
            >
              Copy to Clipboard
            </Button>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
