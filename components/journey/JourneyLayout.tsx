"use client";

import { ReactNode } from "react";

interface JourneyLayoutProps {
  children: ReactNode;
  chapter: string;
  page: number;
  total: number;
}

export default function JourneyLayout({
  children,
  chapter,
  page,
  total,
}: JourneyLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBF6EE]">

      {/* Light */}
      <div className="absolute -left-52 -top-52 h-[800px] w-[800px] rounded-full bg-[#FFD88A]/30 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/50 blur-[180px]" />

      {/* Paper Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}

        <header className="flex items-center justify-between px-16 py-10">

          <p className="text-xs uppercase tracking-[0.5em] text-[#A77A45]">
            {chapter}
          </p>

          <p className="text-sm text-[#9A8A76]">
            {page} / {total}
          </p>

        </header>

        {children}

      </div>

    </main>
  );
}