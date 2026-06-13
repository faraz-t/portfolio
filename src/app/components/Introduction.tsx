"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Fade from "./Fade";

export default function Introduction() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const topRotate = useTransform(scrollYProgress, [0.25, 0.75], [-90, 0]);
  const bottomRotate = useTransform(scrollYProgress, [0.25, 0.75], [90, 0]);

  // This counter-rotates the seal so it always faces the viewer
  // When the paper is at 90deg, the seal rotates -90deg to stay flat
  const sealRotate = useTransform(scrollYProgress, [0.25, 0.75], [-90, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-black"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="mx-2 my-2 sm:mx-4 sm:my-4 w-full">

            <div className="relative perspective-[2200px]">
              {/* ===== TOP HALF ===== */}
              <motion.div
                style={{
                  rotateX: topRotate,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                }}
                className="relative overflow-hidden h-[250px] sm:h-[350px] z-10"
              >
                <div className="absolute inset-0 bg-[#fffaf0]">
                  <div className="absolute top-3 left-3 right-3 bottom-0 border-t-2 border-l-2 border-r-2 border-black/90 pointer-events-none" />
                  
                  <div className="relative h-full pt-8 sm:pt-12 md:pt-16 px-24 sm:px-28 md:px-32 pb-0">
                    <div className="text-center h-full flex flex-col justify-end pb-2 text-black">
                        <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug">
                          —a brief introduction—
                          <br /> <br />
                          dear visitor,
                        </p>
                        <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug mt-4">
                          i'm a developer based in western canada
                          <br />
                          who is passionate about building software that is
                          <br />
                          <i>simple, powerful</i>, and <i>elegant</i>.
                        </p>
                    </div>
                  </div>

                  <img
                    src="/dither.png"
                    alt="dither-top-left"
                    className="absolute left-[14px] top-[14px] h-[calc(100%-14px)] w-auto object-contain rotate-180"
                  />
                </div>
              </motion.div>

              {/* ===== BOTTOM HALF ===== */}
              <motion.div
                style={{
                  rotateX: bottomRotate,
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                }}
                className="relative overflow-visible h-[250px] sm:h-[350px] z-10"
              >
                <div className="absolute inset-0 bg-[#fffaf0]">
                  <div className="absolute top-0 left-3 right-3 bottom-3 border-b-2 border-l-2 border-r-2 border-black/90 pointer-events-none" />

                  <div className="relative h-full pb-8 sm:pb-12 md:pb-16 px-24 sm:px-28 md:px-32 pt-0">
                    <div className="text-center h-full flex flex-col justify-start pt-2 text-black">
                        <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug">
                          on this small corner of the internet lies
                          <br />
                          a collection of my recent projects and experiments—
                          <br />
                          i hope you find something worthwhile.
                        </p>
                        <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug mt-4">
                          sincerely,
                          <br />
                          faraz.
                        </p>
                    </div>
                  </div>

                  <img
                    src="/dither.png"
                    alt="dither"
                    className="absolute right-[14px] bottom-[14px] h-[calc(100%-14px)] w-auto object-contain"
                  />

                  {/* WAX SEAL 
                      - bottom-0: attached to the bottom edge of this flap
                      - translate-y-1/2: hangs exactly halfway off the edge
                      - rotateX: counter-acts the paper's rotation to stay flat to screen
                  */}
                  <motion.img
                    src="/waxseal.png"
                    alt="wax seal"
                    style={{ rotateX: sealRotate }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 z-30 object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}