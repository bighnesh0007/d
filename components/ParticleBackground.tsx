'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const sprinkles: Sprinkle[] = []
    const sprinkleCount = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth)
        this.y = Math.random() * (canvas?.height || window.innerHeight)
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.speedX *= -1
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    class Sprinkle {
      x: number
      y: number
      size: number
      color: string
      speedY: number

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth)
        this.y = 0
        this.size = Math.random() * 3 + 1
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.speedY = Math.random() * 2 + 1
      }

      update() {
        this.y += this.speedY

        if (canvas && this.y > canvas.height) {
          this.y = 0
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function createSprinkles() {
      for (let i = 0; i < sprinkleCount; i++) {
        sprinkles.push(new Sprinkle())
      }
    }

    function animateParticles() {
      if (!ctx) return
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }

      for (let i = 0; i < sprinkles.length; i++) {
        sprinkles[i].update()
        sprinkles[i].draw()
      }

      requestAnimationFrame(animateParticles)
    }

    createParticles()
    createSprinkles()
    animateParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
      createSprinkles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

