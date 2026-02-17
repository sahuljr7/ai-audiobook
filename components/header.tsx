'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { mockUser } from '@/lib/mock-data'
import { useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { LogOut, Settings, User } from 'lucide-react'

export function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  function handleLogout() {
    if (typeof window !== 'undefined') {
      const authKeys = [
        'token',
        'access_token',
        'refresh_token',
        'authToken',
        'user',
      ]

      authKeys.forEach((key) => {
        try {
          window.localStorage.removeItem(key)
        } catch {
          // ignore
        }
      })
    }

    router.push('/login')
  }

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

        <AlertDialog>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Open profile menu"
                >
                  <Avatar className="h-10 w-10 border border-border cursor-pointer hover:border-primary/60 smooth-transition">
                    <AvatarImage
                      src={mockUser.avatar || '/placeholder.svg'}
                      alt={mockUser.name}
                    />
                    <AvatarFallback>
                      {mockUser.name?.[0] ?? 'U'}
                    </AvatarFallback>
                  </Avatar>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col gap-1">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {mockUser.name ?? 'Your account'}
                  </span>
                  {mockUser.email && (
                    <span className="text-xs text-muted-foreground truncate">
                      {mockUser.email}
                    </span>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings (coming soon)</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="flex items-center gap-2 text-destructive focus:bg-destructive/10 focus:text-destructive"
                    aria-label="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Log out of EchoTales?</AlertDialogTitle>
              <AlertDialogDescription>
                You&apos;ll be redirected to the login page. Your theme
                preference will be preserved, but any active session data will
                be cleared on this device.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.header>
  )
}
