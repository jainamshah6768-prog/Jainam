import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F6] to-[#FCE7F3] text-[#7C3F5B] p-6 text-center ${className}`}
      >
        <svg className="w-16 h-16 mb-1.5" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          <circle cx="80" cy="80" r="70" fill="#E11D62" />
          <circle cx="80" cy="80" r="50" fill="#FFFFFF" stroke="#5B142E" strokeWidth="2.5" />
          <path
            d="M68 65 L65 48 C59 46 60 36 68 37 C72 31 82 31 86 36 C94 35 97 44 91 49 L89 65"
            stroke="#E11D62"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M44 74 H58 M53 74 V95 C53 102 43 105 39 99" stroke="#E11D62" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="79" cy="83" r="13.5" stroke="#E11D62" strokeWidth="2.6" />
          <circle cx="74" cy="82" r="1.4" fill="#E11D62" />
          <circle cx="84" cy="82" r="1.4" fill="#E11D62" />
          <path d="M73 88 C76 92 82 92 85 88" stroke="#E11D62" strokeWidth="2" strokeLinecap="round" />
          <path d="M102 72 V100 M97 100 H107 M102 75 C113 73 116 86 105 89" stroke="#E11D62" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <span className="font-display text-sm font-semibold text-[#4A152E]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
