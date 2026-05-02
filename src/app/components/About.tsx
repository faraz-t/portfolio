"use client";

import React from "react";
import Fade from "./Fade";

export default function About() {
  return (
    <section style={{ backgroundColor: "#282828" }} className="text-white pt-8">
      {/* Decorative scrolling header - full width */}
      <Fade>
        <div className="w-full">
          <div className="h-px bg-white"></div>

          {/* Horizontal scrolling text */}
          <div className="overflow-hidden py-1">
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scrolling-text {
                display: flex;
                animation: scroll 15s linear infinite;
                white-space: nowrap;
              }
              @keyframes floatA {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                50% { transform: translateY(-22px) translateX(10px); }
              }
              @keyframes floatB {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                50% { transform: translateY(16px) translateX(-12px); }
              }
              @keyframes floatC {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                50% { transform: translateY(-12px) translateX(-6px); }
              }
              .float-a { animation: floatA 6s ease-in-out infinite; }
              .float-b { animation: floatB 7s ease-in-out infinite; }
              .float-c { animation: floatC 5.2s ease-in-out infinite; }
            `}</style>
            <div className="scrolling-text">
              <span style={{ fontFamily: "Anton, sans-serif" }} className="text-7xl sm:text-8xl md:text-9xl mr-12 tracking-wide">MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦</span>
              <span style={{ fontFamily: "Anton, sans-serif" }} className="text-7xl sm:text-8xl md:text-9xl mr-12 tracking-wide">MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦ MORE ABOUT ME ✦</span>
            </div>
          </div>

          <div className="h-px bg-white"></div>
        </div>
      </Fade>

      <div className="py-14 px-4 sm:px-6 lg:px-8">
        <Fade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 min-h-[68vh]">
            {/* Left text column */}
            <div className="pl-1 sm:pl-2 lg:pl-4 text-left">
              <div className="space-y-8 max-w-[760px]">
                <p className="font-sans text-lg leading-relaxed text-white/80">
                  over the past few years, i've grown passionate about creating intuitive digital experiences that solve real problems. when i'm not coding, you'll find me exploring new technologies or working on side projects that push my creative boundaries.
                </p>

                <div>
                  <h3 className="text-2xl font-serif mb-4 text-left">Background</h3>
                  <p className="font-sans text-white/75 leading-relaxed text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-4 text-left">Interests & Expertise</h3>
                  <p className="font-sans text-white/75 leading-relaxed text-left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-4 text-left">Beyond Code</h3>
                  <p className="font-sans text-white/75 leading-relaxed text-left">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right visuals column */}
            <div className="relative min-h-[420px] lg:min-h-[560px] border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />

              <div className="float-a absolute top-[14%] left-[16%] h-28 w-28 rounded-full border border-white/50 bg-white/10" />
              <div className="float-b absolute top-[42%] left-[48%] h-20 w-20 rounded-full border border-white/40 bg-white/10" />
              <div className="float-c absolute top-[22%] left-[62%] h-36 w-36 rotate-12 border border-white/35 bg-white/5" />
              <div className="float-a absolute top-[68%] left-[20%] h-24 w-24 rotate-45 border border-white/45 bg-white/10" />
              <div className="float-b absolute top-[63%] left-[66%] h-16 w-16 rounded-full border border-white/50 bg-white/15" />

              <div className="absolute bottom-6 left-6 right-6 font-sans text-sm text-white/70">
                placeholder visuals
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}