"use client";

interface JourneyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function JourneyButton({
  children,
  onClick,
}: JourneyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
      group
      mt-24
      inline-flex
      items-center
      gap-4
      text-sm
      uppercase
      tracking-[0.45em]
      text-[#B58B52]
      transition"
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </button>
  );
}