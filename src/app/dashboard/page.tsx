"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen"
    >
      <h1 className="text-6xl font-bold text-green-500"></h1>
    </motion.div>
  );
}
