'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CTAButtonProps {
  text: string
  href: string
  size?: 'sm' | 'default' | 'lg'
  pulse?: boolean
}

export function CTAButton({ text, href, size = 'lg', pulse = false }: CTAButtonProps) {
  return (
    <motion.div
      animate={pulse ? { scale: [1, 1.05, 1] } : {}}
      transition={pulse ? { duration: 2, repeat: Infinity } : {}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        <Button
          size={size}
          className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold rounded-lg smooth-transition glow-effect"
        >
          {text}
        </Button>
      </Link>
    </motion.div>
  )
}
