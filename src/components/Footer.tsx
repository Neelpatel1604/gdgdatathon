"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // Using the second color from colors.txt for the footer background
  return (
    <footer 
      id="footer" 
      className="py-12 text-gray-800"
      style={{ backgroundColor: "#92D7FF" }} // Second color from colors.txt
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Register for Updates</h3>
            <p className="text-sm mb-4">
              Stay informed about GDG Datathon 2025 and be the first to know when registration opens.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/20 border-gray-800/30 text-gray-800 placeholder:text-gray-800/70"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4 font-google-sans-display">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">Code of Conduct</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4 font-google-sans-display">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GDG Datathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
