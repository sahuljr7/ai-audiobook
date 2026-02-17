'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { mockUser } from '@/lib/mock-data'
import { useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 10)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      ref={ref}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'glass-effect border-b border-white/10 backdrop-blur-xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
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

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/library" className="text-foreground/70 hover:text-foreground smooth-transition text-sm">
            Library
          </Link>
          <Link href="/history" className="text-foreground/70 hover:text-foreground smooth-transition text-sm">
            History
          </Link>
          <Link href="/quotes" className="text-foreground/70 hover:text-foreground smooth-transition text-sm">
            Inspiration
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/profile">
              <Avatar className="h-10 w-10 border border-border cursor-pointer hover:border-primary/50 smooth-transition">
                <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
