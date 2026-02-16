'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { mockUser } from '@/lib/mock-data'
import { useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Avatar className="h-10 w-10 border border-white/20">
            <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </motion.header>
  )
}
