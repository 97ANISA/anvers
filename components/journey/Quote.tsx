interface QuoteProps {
  english: string;
  indonesian?: string;
}

export default function Quote({
  english,
  indonesian,
}: QuoteProps) {
  return (
    <>
      <p className="max-w-3xl text-[40px] font-light italic leading-[1.6] text-[#2F2923]">
        {english}
      </p>

      {indonesian && (
        <p className="mx-auto max-w-xl text-xl leading-10 text-[#72675B]">
          {indonesian}
        </p>
      )}
    </>
  );
}