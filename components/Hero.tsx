'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Database, Zap, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 transform rotate-12 scale-150" />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          variants={itemVariants}
        >
          Chat with Your Data
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-300"
          variants={itemVariants}
        >
          Unlock insights from any type of data through intuitive conversations
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <MessageSquare size={48} className="text-blue-400 mb-2" />
            <span className="text-gray-300">Chat Interface</span>
          </div>
          <div className="flex flex-col items-center">
            <Database size={48} className="text-green-400 mb-2" />
            <span className="text-gray-300">Multiple Data Sources</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap size={48} className="text-yellow-400 mb-2" />
            <span className="text-gray-300">Instant Insights</span>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link href='/chat'>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Started
          </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-gray-300" />
      </motion.div>
    </section>
  )
}

