"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, Info, Calendar, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems: NavItem[] = [
    { name: "Home", url: "#top", icon: Home },
    { name: "About", url: "#about", icon: Info },
    { name: "Schedule", url: "#event-info", icon: Calendar },
    { name: "Register", url: "#footer", icon: UserPlus },
  ];

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
      <div className={cn(
        "flex items-center bg-white/10 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        screenSize === "mobile" ? "gap-1" : "gap-3"
      )}>
        {/* Logo - always visible */}
        <div
          className="flex items-center px-2 min-w-fit cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop(e);
            setActiveTab("Home");
          }}
        >
          <Image
            src="/assets/SD-logo.png"
            alt="SD Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full object-contain flex-shrink-0"
            priority
          />
        </div>

        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                if (item.name === "Register") {
                  scrollToFooter(e);
                } else if (item.name === "Home") {
                  scrollToTop(e);
                }
                setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer font-semibold rounded-full transition-colors",
                "text-white/80 hover:text-[#92D7FF]",
                isActive && "bg-white/10 text-[#92D7FF]",
                // Mobile: <640px - Icons only, smaller padding
                screenSize === "mobile" && "text-xs px-3 py-2",
                // Tablet: 640px-1024px - Icons with smaller text
                screenSize === "tablet" && "text-sm px-4 py-2",
                // Desktop: >=1024px - Full text, larger padding
                screenSize === "desktop" && "text-sm px-6 py-2"
              )}
            >
              {screenSize === "desktop" && (
                <span>{item.name}</span>
              )}
              {screenSize === "tablet" && (
                <div className="flex items-center gap-2">
                  <Icon size={16} strokeWidth={2.5} />
                  <span className="text-xs">{item.name}</span>
                </div>
              )}
              {screenSize === "mobile" && (
                <Icon size={18} strokeWidth={2.5} />
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#92D7FF]/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 bg-[#92D7FF] rounded-t-full",
                    screenSize === "mobile" ? "-top-1 w-6 h-0.5" : "-top-2 w-8 h-1"
                  )}>
                    <div className={cn(
                      "absolute bg-[#92D7FF]/20 rounded-full blur-md",
                      screenSize === "mobile" ? "w-8 h-4 -top-1 -left-1" : "w-12 h-6 -top-2 -left-2"
                    )} />
                    <div className={cn(
                      "absolute bg-[#92D7FF]/20 rounded-full blur-md",
                      screenSize === "mobile" ? "w-6 h-4 -top-0.5" : "w-8 h-6 -top-1"
                    )} />
                    <div className={cn(
                      "absolute bg-[#92D7FF]/20 rounded-full blur-sm",
                      screenSize === "mobile" ? "w-3 h-3 top-0 left-1.5" : "w-4 h-4 top-0 left-2"
                    )} />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}