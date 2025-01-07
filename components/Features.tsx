'use client'

import { motion } from 'framer-motion'
import { FileText, PieChart, Users, Globe, Zap, Lock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
    { icon: FileText, title: 'Document Analysis', description: 'Extract insights from text documents, PDFs, and more' },
    { icon: PieChart, title: 'Data Visualization', description: 'Generate interactive charts and graphs on the fly' },
    { icon: Users, title: 'Collaborative Insights', description: 'Share and discuss findings with your team in real-time' },
    { icon: Globe, title: 'Multi-language Support', description: 'Chat and analyze data in over 50 languages' },
    { icon: Zap, title: 'Real-time Processing', description: 'Get instant answers with our lightning-fast AI' },
    { icon: Lock, title: 'Enterprise-grade Security', description: 'Your data is encrypted and protected at all times' },
]

export default function Features() {
    return (
        <section className="py-20 px-4 bg-gray-900 bg-opacity-50">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Powerful Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-blue-500 transition-colors">
                            <CardHeader>
                                <feature.icon size={40} className="text-blue-400 mb-4" />
                                <CardTitle className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</CardTitle>
                                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
)
}

