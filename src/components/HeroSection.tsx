"use client";

import { GetStartedButton } from "@/components/ui/getstartedbutton";
import { motion } from "framer-motion"; 
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Hidden text requirement
  const hiddenText = <span className="sr-only">#GDGDatathon2025</span>;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white/10 backdrop-blur-sm">
      {hiddenText}


      <div className="container mx-auto px-4 py-12 sm:py-24 flex flex-col sm:flex-row items-center justify-between relative z-10">
        <motion.div
          className="sm:w-1/2 text-center sm:text-left mb-10 sm:mb-0 sm:ml-8 lg:ml-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            GDG Datathon 2025
          </h1>

          <motion.p
            className="text-xl sm:text-2xl mb-8 text-white/90 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join us for an exciting hackathon focused on{" "}
            <motion.span
              className="text-[#92D7FF] font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              data science
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-[#92D7FF] font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              machine learning
            </motion.span>{" "}
            innovations.
          </motion.p>

          <div>
            <GetStartedButton />
          </div>
        </motion.div>

        <motion.div
          className="sm:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative w-full max-w-md cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotateY: 5,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-[#92D7FF]/30 rounded-lg blur-xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* 3D Data Network Visualization */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
 
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/3d-sd-card.png"
                alt="Sheridan Datathon 2025 SD Card"
                width={500}
                height={500}
                className="w-full h-auto relative z-20 drop-shadow-2xl"
                priority
              />
            </motion.div>

          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
