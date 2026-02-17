'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function MarketingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="text-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              🎧
            </motion.div>
            <motion.h1
              className="text-xl font-bold gradient-text hidden sm:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EchoTales
            </motion.h1>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/70 hover:text-foreground smooth-transition text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground/70 hover:text-foreground smooth-transition text-sm font-medium">
              About
            </Link>
            <Link href="/pricing" className="text-foreground/70 hover:text-foreground smooth-transition text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/login">
              <button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg smooth-transition">
                Login
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
