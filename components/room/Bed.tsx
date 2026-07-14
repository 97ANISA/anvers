import { motion } from "framer-motion";

export default function Bed() {
  return (
    <motion.div
  animate={{
    y: [0, -2, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
      whileHover={{ scale: 1.01 }}
      className="absolute bottom-48 left-[350px]"
    >
      <div className="relative h-40 w-80 rounded-3xl bg-[#D7BFA8] shadow-xl">

        <div className="absolute left-6 top-5 h-20 w-32 rounded-2xl bg-white" />

        <div className="absolute bottom-0 h-20 w-full rounded-b-3xl bg-[#C6AA91]" />

      </div>
    </motion.div>
  );
}