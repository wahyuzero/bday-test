import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionWrapperProps {
  children: ReactNode;
  key?: string | number;
}

export default function TransitionWrapper({
  children,
  key,
}: TransitionWrapperProps) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
