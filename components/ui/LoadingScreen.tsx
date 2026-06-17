'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HEARTS = [
  { left: '-46px', top: '-18px', size: 22, delay: 0.82 },
  { left: '126px', top: '-32px', size: 16, delay: 0.98 },
  { left: '-30px', top: '108px', size: 13, delay: 1.14 },
  { left: '132px', top: '90px',  size: 19, delay: 0.92 },
]

function HeartSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#E88AB4" aria-hidden="true">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  )
}

export function LoadingScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!sessionStorage.getItem('kd_loaded')) {
        sessionStorage.setItem('kd_loaded', '1')
        setShow(true)
        const t = setTimeout(() => setShow(false), 2300)
        return () => clearTimeout(t)
      }
    } catch {
      // sessionStorage unavailable — skip
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#FAF3E4' }}
        >
          {/* Mascot: spring drop from above + continuous float+wobble */}
          <div className="relative mb-7">
            <motion.div
              initial={{ y: -140, scale: 0.3, rotate: -25 }}
              animate={{ y: 0, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 185, damping: 13, delay: 0.05 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.85 }}
              >
                <Image
                  src="/logo.jpg"
                  alt="カルカモ マスコット"
                  width={164}
                  height={164}
                  className="rounded-2xl"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Hearts that pop out after mascot lands */}
            {HEARTS.map((h, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                style={{ left: h.left, top: h.top }}
                initial={{ scale: 0, opacity: 0, y: 12 }}
                animate={{ scale: [0, 1.6, 1], opacity: [0, 1, 0.85], y: [12, -8, 0] }}
                transition={{ delay: h.delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeartSVG size={h.size} />
              </motion.div>
            ))}
          </div>

          {/* Store name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl tracking-[0.35em] text-brown-deep mb-2"
          >
            KARUKAMO
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68, duration: 0.5 }}
            className="label text-brown-light"
          >
            焼きそばと食べ歩きの店
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
