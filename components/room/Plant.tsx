import { motion } from "framer-motion";

export default function Plant() {
  return (
    <motion.div
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
      className="absolute bottom-48 right-32"
    >
      <div className="ml-6 h-28 w-4 bg-[#6D4C41]" />

      <div className="absolute -top-3 left-0 h-10 w-10 rounded-full bg-green-500" />
      <div className="absolute left-8 top-2 h-10 w-10 rounded-full bg-green-400" />
      <div className="absolute -left-2 top-5 h-10 w-10 rounded-full bg-green-600" />

      <div className="mt-24 h-10 w-16 rounded-b-xl bg-[#C48A56]" />
    </motion.div>
  );
}