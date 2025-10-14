"use client";

import React from "react";
import Image from "next/image";

interface GlowingImageProps {
  src: string;
  alt: string;
  height?: string;
}

const GlowingImage: React.FC<GlowingImageProps> = ({
  src,
  alt,
  height = "h-64 md:h-96",
}) => {
  return (
    <div className={`relative w-full ${height} rounded-xl overflow-visible group`}>
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px] scale-[1.2] opacity-80 rounded-xl w-full h-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(100px) saturate(500%) brightness(60%)",
        }}
      ></div>

      {/* white outline */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition ring-2 ring-primary/60 opacity-0 group-hover:opacity-100"></div>

      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="relative z-10 w-full h-full object-cover rounded-xl border border-gray-300 dark:border-gray-600 transition-shadow group-hover:shadow-xl group-hover:shadow-primary/30"
      />
    </div>
  );
};

export default GlowingImage;
