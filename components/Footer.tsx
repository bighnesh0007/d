import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              DataChat
            </h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Unlock the power of your data through intuitive conversations. Transform complex data into actionable insights.
            </p>
            
            {/* Newsletter signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Features</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Pricing</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Use Cases</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Integration</Button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Documentation</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">API Reference</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Blog</Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Community</Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>support@datachat.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 DataChat. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 text-sm">
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Privacy Policy</Button>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">Terms of Service</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}