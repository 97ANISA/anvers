import { motion } from "framer-motion";

export default function Bookshelf() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="absolute left-24 bottom-260"
    >
      <div className="h-64 w-32 rounded-xl bg-[#8A5A3C] shadow-xl">

        <div className="mt-5 flex justify-center gap-1">

          <div className="h-20 w-4 rounded bg-red-400" />

          <div className="h-24 w-4 rounded bg-green-400" />

          <div className="h-16 w-4 rounded bg-blue-400" />

          <div className="h-20 w-4 rounded bg-yellow-300" />

          <div className="h-24 w-4 rounded bg-purple-400" />

        </div>

      </div>
    </motion.div>
  );
}