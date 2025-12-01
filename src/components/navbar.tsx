"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Mail, Code } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-md border-b border-white/5" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                Profile
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "bg-white text-black" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-4 rounded-2xl transition-all ${
                          isActive 
                            ? "bg-white text-black font-semibold" 
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
