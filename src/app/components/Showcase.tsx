import React from "react";

interface ShowcaseProps {
  title?: string;
  children?: React.ReactNode;
}

const Showcase: React.FC<ShowcaseProps> = ({ title, children }) => {
  return (
    <section className="overflow-visible relative w-full h-[75vh] mt-12 md:h-56 lg:h-64 rounded-xl overflow-hidden flex items-center justify-center text-center border border-gray-300 dark:border-gray-700 group">
      {/* colorful radial background */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(100, 160, 255, 0.5), transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(180, 100, 255, 0.5), transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(80, 50, 255, 0.4), rgba(0,0,0,0) 70%)
          `,
          filter: "saturate(140%) blur(40px)",
        }}
      ></div>

      {/* hover highlight overlay (white outline glow) */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition ring-2 ring-primary/60 opacity-0 group-hover:opacity-100"></div>

      {/* text */}
      <div className="relative z-10 max-w-2xl px-6">
        {title && (
          <h2 className="text-xl md:text-2xl tracking-tight text-white mb-3 drop-shadow-lg">
            {title}
          </h2>
        )}
        {children && <div className="text-white/90">{children}</div>}
      </div>
    </section>
  );
};

export default Showcase;
