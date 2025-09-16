"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, Users, Trophy } from "lucide-react";

const eventCards = [
  {
    title: "Workshops",
    description: "Learn from industry experts in hands-on workshops covering data science, machine learning, and AI technologies.",
    icon: <Laptop className="h-12 w-12 text-[#92D7FF]" />,
    delay: 0.1
  },
  {
    title: "Networking",
    description: "Connect with fellow developers, data scientists, and potential employers in structured networking sessions.",
    icon: <Users className="h-12 w-12 text-[#92D7FF]" />,
    delay: 0.3
  },
  {
    title: "Prizes",
    description: "Compete for exciting prizes including cash awards, Google Cloud credits, and opportunities to present your work.",
    icon: <Trophy className="h-12 w-12 text-[#92D7FF]" />,
    delay: 0.5
  }
];


export default function EventInfoSection() {
  return (
    <section id="event-info" className="py-16 sm:py-24 bg-white/10 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-[#92D7FF]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-16 w-36 h-36 bg-[#00175D]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-[#92D7FF]/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Event Highlights
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#00175D] to-[#92D7FF] mx-auto rounded-full mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join us for an action-packed weekend featuring these exciting opportunities
          </motion.p>
        </motion.div>


        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="group"
            >
              <Card className="h-full bg-white/20 border-white/30 backdrop-blur-md hover:bg-white/25 transition-all duration-300 shadow-xl">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#92D7FF]/30 to-[#00175D]/30 border border-white/20">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white text-center">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <CardDescription className="text-sm text-white/80 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}