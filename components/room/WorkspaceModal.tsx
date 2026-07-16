"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WorkspaceModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute left-1/2 top-1/2 z-50 w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-2xl"
          >
            <h1 className="text-4xl font-bold">
              💻 Workspace
            </h1>

            <p className="mt-4 text-gray-500">
              Selamat datang di Workspace Anvers.
            </p>

            <div className="mt-8 rounded-2xl bg-gray-100 p-6">
              <p className="text-gray-600">
                🚧 Halaman ini masih dalam proses pembangunan.
              </p>

              <p className="mt-2 text-gray-600">
                Nantinya semua project, desain, dan karya akan ditampilkan di sini.
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-8 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}