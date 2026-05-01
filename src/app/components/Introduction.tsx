"use client";

import React from "react";
import Fade from "./Fade";

export default function Introduction() {
  return (
    <section style={{ backgroundColor: "#fffaf0" }} className="text-black py-2 px-2">
      <div className="max-w-full mx-auto">
        <div className="mx-2 my-2 sm:mx-4 sm:my-4 relative border-2 border-black/80 shadow-inner">
          {/* inner padded content so border has no padding (image can sit flush) */}
          <div className="p-8 sm:p-12 md:p-16 pl-24 pr-24 sm:pl-28 sm:pr-28 md:pl-32 md:pr-32">
            <div className="text-center">
              <Fade>
                <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug">
                  dear visitor:
                </p>
                <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug mt-4">
                  i'm a developer based in western canada
                  <br />
                  who is passionate about building software that is
                  <br />
                  <i>simple, powerful</i>, and <i>elegant</i>.
                </p>
                <p className="font-serif lowercase text-xl sm:text-2xl md:text-3xl leading-snug mt-4">
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
              </Fade>
            </div>
          </div>

          {/* dither image sits absolute bottom-right touching the inner border */}
          <img
            src="/dither.png"
            alt="dither"
            className="absolute right-0 bottom-0 h-[70%] w-auto object-contain"
            style={{ display: "block" }}
          />
          {/* top-left dither: use dither.png rotated 180deg at ~50% height */}
          <img
            src="/dither.png"
            alt="dither-top-left"
            className="absolute left-0 top-0 h-[70%] w-auto object-contain transform rotate-180"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
    