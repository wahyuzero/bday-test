import { motion } from "framer-motion";
import { FaHeart, FaSun } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Scene2MessageProps {
  onNext: () => void;
}

export default function Scene2Message({ onNext }: Scene2MessageProps) {
  const messageText =
    "Selamat tambah umur ya dit... ya walaupun ini telat sehari si hehe.";

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-blue-50"
      >
        <ParticlesBackground />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl backdrop-blur-sm"
      >
        {/* Floating icons */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaSun className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <FaHeart className="w-12 h-12 text-pink-500" />
          </motion.div>
        </div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="font-dancing text-3xl md:text-6xl font-bold text-pink-700 mb-6">
            Buat yang nambah umur hari <i class="line-through text-gray-500">hari ini</i> kemarin
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            {messageText}
          </p>
        </motion.div>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={onNext}
          className="mt-12 soft-glow px-8 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Lanjut
        </motion.button>
      </motion.div>
    </div>
  );
}
