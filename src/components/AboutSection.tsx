"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Trophy, Code, Cpu, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const [activeFeature, setActiveFeature] = useState("duration");

  const features = [
    {
      id: "duration",
      name: "48 Hours",
      icon: <Clock className="w-6 h-6" />,
      title: "Intensive Development Period",
      description: "Participants have 48 continuous hours to develop innovative data science solutions. This intensive format encourages rapid prototyping, creative problem-solving, and collaborative innovation under time pressure with fellow participants.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "community",
      name: "Global Community",
      icon: <Users className="w-6 h-6" />,
      title: "Worldwide Collaboration",
      description: "Connect with data scientists, developers, and innovators from around the globe. Build lasting professional relationships while working together on meaningful projects that have real-world impact and significance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "prizes",
      name: "Amazing Prizes",
      icon: <Trophy className="w-6 h-6" />,
      title: "Recognition & Rewards",
      description: "Compete for exciting prizes including cash awards, Google Cloud credits, and opportunities to present your work. Winners receive recognition from industry leaders and potential career advancement opportunities.",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "skills",
      name: "Skill Building",
      icon: <Code className="w-6 h-6" />,
      title: "Learn & Grow",
      description: "Whether you're a seasoned data scientist or just starting your journey, enhance your skills through hands-on experience, mentorship, and exposure to cutting-edge tools and emerging technologies in the field.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "technology",
      name: "Latest Tech",
      icon: <Cpu className="w-6 h-6" />,
      title: "Cutting-edge Tools",
      description: "Access exclusive datasets, state-of-the-art machine learning platforms, and Google's latest AI technologies. Work with industry-standard tools and emerging technologies that define the future of data science.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "impact",
      name: "Real Impact",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Meaningful Solutions",
      description: "Focus on solving real-world problems that matter to society. Your projects could address challenges in healthcare, sustainability, education, or social good, creating solutions that make a lasting difference.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const selectedFeature = features.find(f => f.id === activeFeature);

  return (
    <section id="about" className="py-16 sm:py-24 bg-white/10 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#92D7FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00175D]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About GDG Datathon
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#92D7FF] to-[#00175D] mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Left side - Static Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card className="bg-white/20 border-white/30 backdrop-blur-md hover:bg-white/25 transition-all duration-300 shadow-xl">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  {/* First paragraph as blockquote - per requirements */}
                  <motion.blockquote
                    className="border-l-4 border-[#92D7FF] pl-6 italic text-white/95 text-lg leading-relaxed bg-white/5 p-4 rounded-r-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    The Google Developer Group (GDG) Datathon 2025 brings together data scientists, developers, and innovators from around the world to collaborate on solving real-world problems using data science and machine learning. This 48-hour hackathon provides a unique platform for participants to showcase their skills, learn from industry experts, and create impactful solutions.
                  </motion.blockquote>

                  {/* Dynamic content directly below blockquote */}
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{selectedFeature?.title}</h3>
                    <p className="text-white/90 leading-relaxed">
                      {selectedFeature?.description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right side - Interactive circular selector */}
            <motion.div
              className="lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Mobile: Show horizontal selector */}
              <div className="lg:hidden w-full">
                <div className="text-center text-white mb-6">
                  <div className="text-2xl font-bold mb-2">{selectedFeature?.name}</div>
                  <div className="text-sm opacity-80">Tap to explore features</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`w-full h-20 rounded-lg bg-white/20 backdrop-blur-sm border transition-all duration-300 flex flex-col items-center justify-center ${
                        activeFeature === feature.id
                          ? "border-[#92D7FF] bg-white/30"
                          : "border-white/30 hover:border-white/50"
                      }`}
                    >
                      <div className={`mb-1 ${activeFeature === feature.id ? 'text-[#92D7FF]' : 'text-white'}`}>
                        {feature.icon}
                      </div>
                      <div className={`text-xs font-medium ${activeFeature === feature.id ? 'text-[#92D7FF]' : 'text-white/80'}`}>
                        {feature.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: Show circular selector */}
              <div className="hidden lg:block relative w-full aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#92D7FF]/5 to-[#00175D]/5 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-white/20 backdrop-blur-sm rounded-full shadow-xl border border-white/30 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">{selectedFeature?.name}</div>
                    <div className="text-sm opacity-80">Explore Features</div>
                  </div>
                </div>

                {features.map((feature, index) => {
                  const angle = (index * (360 / features.length)) * (Math.PI / 180);
                  const x = Math.cos(angle) * 45 + 50;
                  const y = Math.sin(angle) * 45 + 50;

                  return (
                    <div
                      key={feature.id}
                      className={`absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        activeFeature === feature.id ? "border-2 border-[#92D7FF]" : ""
                      }`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setActiveFeature(feature.id)}
                    >
                      <div className={`${activeFeature === feature.id ? 'text-[#92D7FF]' : 'text-gray-600'}`}>
                        {feature.icon}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}