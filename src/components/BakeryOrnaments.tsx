import { useId } from 'react';

export function ScallopDivider({
  fillColor = '#FFFFFF',
  className = '',
}: {
  fillColor?: string;
  className?: string;
}) {
  const uid = useId().replace(/:/g, '');
  const patternId = `scallop-${uid}`;

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none" className="w-full h-5 sm:h-6 block">
        <defs>
          <pattern id={patternId} width="48" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M0 28 L0 10 C8 10 12 24 24 24 C36 24 40 10 48 10 L48 28 Z"
              fill={fillColor}
            />
            <path
              d="M0 10 C8 10 12 24 24 24 C36 24 40 10 48 10"
              fill="none"
              stroke="#F9A8D4"
              strokeWidth="1.25"
            />
          </pattern>
        </defs>
        <rect width="1200" height="28" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

export function CornerFlourish({
  position = 'tl',
  className = '',
}: {
  position?: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}) {
  const rotation =
    position === 'tr'
      ? 'rotate-90'
      : position === 'br'
        ? 'rotate-180'
        : position === 'bl'
          ? '-rotate-90'
          : '';

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={`w-7 h-7 text-[#F472B6] pointer-events-none select-none ${rotation} ${className}`}
    >
      <path
        d="M3 24 C3 11 11 3 24 3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M8 17 C8 11 11 8 17 8"
        stroke="#F9A8D4"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="7" cy="7" r="2" fill="#DB2777" opacity="0.7" />
    </svg>
  );
}

export function BakeryCrestDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#F472B6]" />
      <div className="flex items-center gap-2 text-[#DB2777]">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <path
            d="M12 3.5C13.6 6 13.6 8.2 12 10C10.4 8.2 10.4 6 12 3.5Z"
            fill="#F9A8D4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M12 20.5C13.6 18 13.6 15.8 12 14C10.4 15.8 10.4 18 12 20.5Z"
            fill="#F9A8D4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M3.5 12C6 10.4 8.2 10.4 10 12C8.2 13.6 6 13.6 3.5 12Z"
            fill="#F9A8D4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M20.5 12C18 10.4 15.8 10.4 14 12C15.8 13.6 18 13.6 20.5 12Z"
            fill="#F9A8D4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
        {label && (
          <span className="font-display text-xs italic tracking-wide text-[#9D174D]">
            {label}
          </span>
        )}
      </div>
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#F472B6]" />
    </div>
  );
}

export function JainOvenPackEmblemIllustration() {
  const uid = useId().replace(/:/g, '');
  const arcId = `jop-arc-${uid}`;

  return (
    <svg className="w-32 h-32 mx-auto" viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <defs>
        <path id={arcId} d="M 32 84 A 50 50 0 0 0 128 84" />
      </defs>
      {/* Outer Rose-Pink Ring */}
      <circle cx="80" cy="80" r="72" fill="#E11D62" />
      {/* Inner Plum Rim & White Center */}
      <circle cx="80" cy="80" r="52" fill="#FFFFFF" stroke="#5B142E" strokeWidth="2.5" />
      {/* Curved "Food Products" on Bottom Ring */}
      <text
        fill="#FFFFFF"
        fontSize="14"
        fontWeight="700"
        fontFamily="Georgia, serif"
        letterSpacing="0.5"
      >
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          Food Products
        </textPath>
      </text>
      {/* Chef's Hat above O */}
      <path
        d="M68 65 L65 48 C59 46 60 36 68 37 C72 31 82 31 86 36 C94 35 97 44 91 49 L89 65"
        stroke="#E11D62"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M70 60 C76 58 82 58 87 60" stroke="#E11D62" strokeWidth="2.2" strokeLinecap="round" />
      {/* Stylized J */}
      <path
        d="M44 74 H58 M53 74 V95 C53 102 43 105 39 99 C37 96 40 92 43 94"
        stroke="#E11D62"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Smiling O with Top Swirl */}
      <circle cx="79" cy="83" r="13.5" stroke="#E11D62" strokeWidth="2.6" />
      <path d="M79 70 C82 70 84 73 81 75 C78 76 76 73 79 72" stroke="#E11D62" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="74" cy="82" r="1.4" fill="#E11D62" />
      <circle cx="84" cy="82" r="1.4" fill="#E11D62" />
      <path d="M73 88 C76 92 82 92 85 88" stroke="#E11D62" strokeWidth="2" strokeLinecap="round" />
      {/* Stylized P */}
      <path
        d="M102 72 V100 M97 100 H107 M102 75 C113 73 116 86 105 89 C101 90 99 86 102 85"
        stroke="#E11D62"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RibbonGiftBoxIllustration() {
  return (
    <svg className="w-24 h-22 mx-auto" viewBox="0 0 110 96" fill="none" aria-hidden="true">
      <rect
        x="20"
        y="42"
        width="70"
        height="40"
        rx="4"
        fill="#FFFFFF"
        stroke="#DB2777"
        strokeWidth="1.75"
      />
      <rect
        x="15"
        y="31"
        width="80"
        height="13"
        rx="3"
        fill="#FCE7F3"
        stroke="#DB2777"
        strokeWidth="1.75"
      />
      <rect
        x="49"
        y="31"
        width="12"
        height="51"
        fill="#F472B6"
        fillOpacity="0.45"
        stroke="#DB2777"
        strokeWidth="1.25"
      />
      <path
        d="M55 31 C42 15 30 22 36 31 Z"
        fill="#F9A8D4"
        stroke="#DB2777"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M55 31 C68 15 80 22 74 31 Z"
        fill="#F9A8D4"
        stroke="#DB2777"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="55" cy="30" r="3.5" fill="#DB2777" />
    </svg>
  );
}
