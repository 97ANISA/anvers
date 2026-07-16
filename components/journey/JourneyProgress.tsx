interface JourneyProgressProps {
  total: number;
  current: number;
}

export default function JourneyProgress({
  total,
  current,
}: JourneyProgressProps) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full transition-all duration-500 ${
            index === current
              ? "h-3 w-8 bg-[#D6A85D]"
              : index < current
              ? "h-3 w-3 bg-[#D6A85D]"
              : "h-3 w-3 bg-[#E6D7C2]"
          }`}
        />
      ))}
    </div>
  );
}