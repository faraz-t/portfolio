"use client";

import React from "react";
import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  brightness?: number; // Optional brightness prop
}

const Figure: React.FC<FigureProps> = ({ src, alt, caption, brightness }) => {
  return (
    <figure className="flex flex-col items-center justify-center my-8">
      <div className="relative max-w-full mx-auto group">
        {/* Glow background */}
        <div
          className="absolute inset-0 -z-10 blur-[120px] scale-[1.2] opacity-80 rounded-xl"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `blur(100px) saturate(500%) brightness(${brightness ?? 60}%)`,
          }}
        ></div>

        {/* White outline on hover */}
        <div className="absolute inset-0 rounded-xl pointer-events-none transition ring-2 ring-primary/60 opacity-0 group-hover:opacity-100"></div>

        {/* Main image */}
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="relative z-10 w-auto h-auto max-w-full rounded-xl border border-gray-300 dark:border-gray-600 transition-shadow group-hover:shadow-xl group-hover:shadow-primary/30"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-3 text-center text-gray-600 dark:text-gray-400 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;