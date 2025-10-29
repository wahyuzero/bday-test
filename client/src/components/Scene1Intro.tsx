import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Scene1IntroProps {
  onNext: () => void;
}

export default function Scene1Intro({ onNext }: Scene1IntroProps) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Haii... aku ada sesuatu nih buat kamu!";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedText]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-50 to-pink-50">
        <ParticlesBackground variant="intro" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        {/* Typing text */}
        <h1 className="font-dancing text-5xl md:text-7xl font-bold text-pink-700 mb-8 min-h-20">
          {displayedText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-blue-600 mb-12 font-light"
        >
          Sesuatu spesial buat kamu
        </motion.p>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={onNext}
          className="soft-glow px-8 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Lanjut
          <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
