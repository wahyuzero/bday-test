import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

interface Wish {
  id: string;
  text: string;
  timestamp: number;
}

interface Scene5WishBoardProps {
  onNext: () => void;
}

export default function Scene5WishBoard({ onNext }: Scene5WishBoardProps) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem("birthday_wishes");
    if (savedWishes) {
      try {
        setWishes(JSON.parse(savedWishes));
      } catch (error) {
        console.error("Failed to load wishes:", error);
      }
    }
  }, []);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("birthday_wishes", JSON.stringify(wishes));
  }, [wishes]);

  const addWish = () => {
    if (inputValue.trim()) {
      const newWish: Wish = {
        id: Date.now().toString(),
        text: inputValue,
        timestamp: Date.now(),
      };
      setWishes([newWish, ...wishes]);
      setInputValue("");
    }
  };

  const deleteWish = (id: string) => {
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addWish();
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100"
      >
        <ParticlesBackground />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-8"
      >
        <h2 className="font-dancing text-4xl md:text-6xl font-bold text-pink-700 mb-4">
          Wish Board
        </h2>
        <p className="text-gray-600 mb-8 font-light">
          Coba tulis harapan atau doamu untukku di bawah ini, aku ngga bakal tau kok... beneran deh!
        </p>

        {/* Input section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl mb-8"
        >
          <div className="flex gap-2 md:gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tulis harapan atau doamu..."
              className="flex-1 px-4 py-3 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={addWish}
              className="soft-glow px-6 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Oke
            </button>
          </div>
        </motion.div>

        {/* Wishes display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-2xl max-h-96 overflow-y-auto"
        >
          <AnimatePresence mode="popLayout">
            {wishes.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 text-gray-500"
              >
                <p className="font-light">Belum ada yang ditambahkan..</p>
              </motion.div>
            ) : (
              <div className="space-y-3">
                {wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="glass soft-shadow rounded-xl p-4 flex items-start gap-3 group"
                  >
                    <FaStar className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 flex-1 font-light">{wish.text}</p>
                    <button
                      onClick={() => deleteWish(wish.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onNext}
          className="mt-8 soft-glow px-8 py-3 bg-gradient-to-r from-pink-300 to-blue-300 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Next
        </motion.button>
      </motion.div>
    </div>
  );
}
