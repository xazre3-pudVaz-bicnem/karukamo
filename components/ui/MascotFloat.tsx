'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function MascotFloat() {
  return (
    <motion.div
      className="absolute z-10 pointer-events-none select-none"
      style={{ bottom: '56px', right: '1.25rem' }}
      initial={{ opacity: 0, x: 60, rotate: 15 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ delay: 1.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.45))' }}
      >
        <Image
          src="/logo.jpg"
          alt="カルカモ マスコット"
          width={92}
          height={92}
          className="rounded-2xl"
        />
      </motion.div>
    </motion.div>
  )
}
