"use client";

import React from "react";
import Fade from "./Fade";

export default function Introduction() {
  return (
    <section style={{ backgroundColor: "#fffaf0" }} className="text-black py-2">
      <div className="max-w-full mx-auto">
        <div className="mx-2 my-2 sm:mx-4 sm:my-4 border border-black/80 p-8 sm:p-12 md:p-16 shadow-inner">
          <div className="text-center">
            <Fade>
              <p className="font-serif lowercase text-2xl sm:text-3xl md:text-4xl leading-snug">
                dear visitor — this is a short introduction placeholder.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
    