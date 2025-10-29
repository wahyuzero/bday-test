import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Scene6EndingProps {
  onRestart: () => void;
}

export default function Scene6Ending({ onRestart }: Scene6EndingProps) {
  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Night theme background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
      >
        <ParticlesBackground variant="ending" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        {/* Pulsing heart */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="flex justify-center mb-8"
        >
          <FaHeart className="w-20 h-20 text-pink-300" />
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="font-dancing text-5xl md:text-7xl font-bold text-pink-200 mb-6">
            Barakallah fii umrik
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
            Buat temenku yang spesial
          </p>
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 space-y-4"
        >
          <p className="text-lg text-purple-200 font-light">
            Di tahun yang baru ini, aku doain semoga selalu sehat, bahagia, dilancarkan rizky nya dan semua impian kamu tercapai.
          </p>
          <p className="text-lg text-purple-200 font-light">
            Meskipun telat.. Makasih ya udah mau buka surat ini.
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 pt-8 border-t border-pink-300 border-opacity-30"
        >
          <p className="text-pink-200 font-dancing text-2xl mb-2">
            Created by <a href="https://frugaldev.biz.id"><u>Frugaldev</u></a>
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <FaHeart className="w-6 h-6 text-pink-300 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Restart button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          onClick={onRestart}
          className="mt-12 soft-glow px-8 py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Ulangi
        </motion.button>
      </motion.div>
    </div>
  );
}
