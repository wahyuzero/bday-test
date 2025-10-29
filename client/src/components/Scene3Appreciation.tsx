import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFeather } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Scene3AppreciationProps {
  onNext: () => void;
}

export default function Scene3Appreciation({ onNext }: Scene3AppreciationProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const appreciationItems = [
    "Mau temenan sama aku sejak smk",
    "Tahan sama aku yang pendiem",
    "Mau denger curhatanku yang aneh.. wkwk",
    "Dan... apa lagi ya... pokoknya makasih banyak deh! :)",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100"
      >
        <ParticlesBackground />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        {/* Floating feather */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-20 right-10 md:right-20"
        >
          <FaFeather className="w-12 h-12 text-blue-400 opacity-70" />
        </motion.div>

        <h2 className="font-dancing text-4xl md:text-6xl font-bold text-pink-700 mb-12">
          Makasih ya karena...
        </h2>

        {/* Appreciation items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {appreciationItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass soft-shadow rounded-2xl p-6 md:p-8 text-left"
          >
            <p className="text-lg md:text-xl text-gray-700 font-light">
              {item}
            </p>
          </motion.div>
          ))}
        </motion.div>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={onNext}
          className="mt-12 soft-glow px-8 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Lanjut
        </motion.button>
      </motion.div>
    </div>
  );
}
