'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function LoadingScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!sessionStorage.getItem('kd_loaded')) {
        sessionStorage.setItem('kd_loaded', '1')
        setShow(true)
        const t = setTimeout(() => setShow(false), 1700)
        return () => clearTimeout(t)
      }
    } catch {
      // sessionStorage unavailable (private mode etc.) — skip loading
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#FAF3E4' }}
        >
          {/* Duck mascot SVG */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: [0, -6, 0, -4, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.1 },
              y: { duration: 1.4, delay: 0.2, ease: 'easeInOut' },
            }}
            className="mb-4"
          >
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none" aria-hidden="true">
              <ellipse cx="26" cy="33" rx="20" ry="13" fill="#46362A" fillOpacity="0.8" />
              <path d="M42 26 Q47 17 45 11" stroke="#46362A" strokeWidth="7" strokeLinecap="round" />
              <circle cx="45" cy="9" r="8" fill="#46362A" fillOpacity="0.8" />
              <path d="M51 8 L60 10 L51 13 Z" fill="#C8400A" />
              <circle cx="48" cy="6" r="1.8" fill="white" />
              <path d="M9 32 Q26 22 42 28" stroke="#FAF3E4" strokeWidth="1.5" fill="none" strokeOpacity="0.35" />
            </svg>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3"
          >
            <Image
              src="/logo.jpg"
              alt="カルカモ"
              width={56}
              height={56}
              className="rounded-sm"
              priority
            />
          </motion.div>

          {/* Store name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-xl tracking-[0.35em] text-brown-deep mb-2"
          >
            KARUKAMO
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="label text-brown-light"
          >
            焼きそばと食べ歩きの店
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
