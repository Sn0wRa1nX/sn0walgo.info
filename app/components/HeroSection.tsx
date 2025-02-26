"use client"

import { useRef } from "react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Replace Sn0wAlgo text with logo */}
        <Image 
          src="/logo.png" 
          alt="Sn0wAlgo Logo" 
          width={500} 
          height={250} 
          priority 
          className="mx-auto animate-fade-in-down"
        />
        
        <p className="text-xl mb-8 animate-fade-in-up">
          Next generation of hyper speed algorithms for Jailbreak
        </p>
        
        <button
          onClick={scrollToFeatures}
          className="bg-violet text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Show More
        </button>
      </div>
    </section>
  )
}
