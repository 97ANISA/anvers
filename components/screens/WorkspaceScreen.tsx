"use client";

import { motion } from "framer-motion";

interface WorkspaceScreenProps {
  onBack: () => void;
}

export default function WorkspaceScreen({
  onBack,
}: WorkspaceScreenProps) {
  return (
    <motion.main
      initial={{
        scale: 1.05,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.95,
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="flex min-h-screen items-center justify-center bg-[#F6F1E8]"
    >
      <div className="w-[900px] rounded-3xl bg-white p-10 shadow-2xl">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Anvers
            </p>

            <h1 className="mt-2 text-5xl font-bold">
              💻 Workspace
            </h1>
          </div>

          <button
            onClick={onBack}
            className="rounded-xl bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-700"
          >
            ← Back
          </button>

        </div>

        <p className="mt-8 text-gray-500">
          Selamat datang di Workspace.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6">

          <div className="rounded-2xl border bg-neutral-50 p-6">
            <h2 className="font-semibold">
              💬 ChatStudio
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fake chat generator.
            </p>
          </div>

          <div className="rounded-2xl border bg-neutral-50 p-6">
            <h2 className="font-semibold">
              💍 Wedding Invitation
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Digital invitation.
            </p>
          </div>

          <div className="rounded-2xl border bg-neutral-50 p-6">
            <h2 className="font-semibold">
              🌿 Anvers
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Interactive personal world.
            </p>
          </div>

        </div>

      </div>
    </motion.main>
  );
}