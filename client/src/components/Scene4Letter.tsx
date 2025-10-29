import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Scene4LetterProps {
  onNext: () => void;
}

export default function Scene4Letter({ onNext }: Scene4LetterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const letterContent =
    "Waktu pertama kali kita ngobrol cuma karena tugas dari guru, aku nggak pernah nyangka kalau momen sekecil itu bisa jadi awal dari pertemanan yang panjang sampe sekarang. Meskipun sekarang kita berjalan di jalan masing-masing, aku bersyukur -- karena di setiap fase hidupku, kamu tetap jadi bagian yang aku inget baik-baik.";

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"
      >
        <ParticlesBackground />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h2 className="font-dancing text-4xl md:text-6xl font-bold text-pink-700 mb-12">
          Pesan buat kamu
        </h2>

        {/* Envelope or Letter */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer flex justify-center mb-8"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="soft-glow soft-shadow rounded-lg p-8 bg-white"
              >
                <FaEnvelope className="w-24 h-24 text-pink-500 mx-auto" />
                <p className="text-gray-600 mt-4 font-light">Buka</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.8 }}
              className="soft-shadow glass rounded-2xl p-8 md:p-12 mb-8"
            >
              <div className="text-left">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6">
                  {letterContent}
                </p>
                <p className="text-right text-pink-600 font-dancing text-2xl">
                  29 Oktober 2025,
                </p>
                <p className="text-right text-pink-600 font-dancing text-2xl">
                  Wahyu
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next button - appears after letter opens */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              onClick={onNext}
              className="soft-glow px-8 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Lanjut
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
