'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 users',
      '10,000 queries per month',
      'Basic data visualization',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 users',
      '50,000 queries per month',
      'Advanced data visualization',
      'Priority email support',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited users',
      'Unlimited queries',
      'Advanced data visualization',
      '24/7 phone and email support',
      'Custom integrations',
      'Dedicated account manager',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Plan
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 text-green-500" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

