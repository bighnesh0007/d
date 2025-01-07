'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Sparkle {
  id: string
  createdAt: number
  color: string
  size: number
  style: {
    top: string
    left: string
    zIndex: number
  }
}

const DEFAULT_COLOR = '#FFC700'
const generateSparkle = (color: string = DEFAULT_COLOR): Sparkle => {
  return {
    id: String(Math.random()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 10 + 5,
    style: {
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      zIndex: Math.floor(Math.random() * 100)
    }
  }
}

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const now = Date.now()
    console.log('now', now) // 1632210000000
    const newSparkles = Array.from({ length: 20 }, () => generateSparkle())
    setSparkles(newSparkles)

    const timer = setTimeout(() => {
      setSparkles([])
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {sparkles.map(sparkle => (
        <motion.svg
          key={sparkle.id}
          style={sparkle.style}
          width={sparkle.size}
          height={sparkle.size}
          viewBox="0 0 160 160"
          fill="none"
          className="absolute pointer-events-none"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          exit={{ scale: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <path
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            fill={sparkle.color}
          />
        </motion.svg>
      ))}
    </AnimatePresence>
  )
}

