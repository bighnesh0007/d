'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: 'John Doe',
    role: 'Data Scientist',
    company: 'TechCorp',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: "This AI-powered chat tool has revolutionized the way we analyze our data. It's like having a data expert available 24/7!",
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager',
    company: 'GrowthInc',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: "The insights we've gained from this platform have directly contributed to a 30% increase in our conversion rates. It's a game-changer!",
  },
  {
    name: 'Alex Johnson',
    role: 'CEO',
    company: 'StartupX',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: 'The ease of use and accuracy of the AI analysis have made this an indispensable tool for our entire organization.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

