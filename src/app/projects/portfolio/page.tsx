"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { House } from "lucide-react";
import ImageGlow from "@/app/components/ImageGlow";
import Figure from "@/app/components/Figure";
import Showcase from "@/app/components/Showcase";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Portfolio
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/portfolio.png" alt="Portfolio project cover" />

      {/* Metadata */}
      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Date
            </div>
            <div className="text-gray-600 dark:text-gray-400">2023-2025</div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Description
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              A brief history of portfolio projects I've built with various technologies over the past few years.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["web", "graphic-design", "ui-ux"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Technologies
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              HTML, CSS, JavaScript, Next.js, React, Vite, Tailwind CSS, Vercel, GitHub Pages
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">

        <h2 className="text-2xl font-bold">Introduction</h2>

        <p>
        This is a short recap of the evolution of this website, with a list of my inspirations at the end. 
        </p>

        <h2 className="text-2xl font-bold">Mid 2023 - v1.0</h2>

        <Figure src="/figures/portfolio-1.png" alt="Portfolio v1.0 screenshot" />
        <Figure src="/figures/portfolio-2.png" alt="Portfolio v1.0 screenshot" />

        <p>
        For the first few versions of this site, I used the same dark blue theme. The first version of the site had a lot of different text styles - bolds, italics, gradients, cursive. There was also a vertical bar of icons on the right side of the page, which did a nice job of filling in the empty space.  
        </p>

        <h2 className="text-2xl font-bold">Early 2024 - v1.1</h2>

        <Figure src="/figures/portfolio-3.png" alt="Portfolio v1.1 screenshot" />
        <Figure src="/figures/portfolio-4.png" alt="Portfolio v1.1 screenshot" />

        <p>
        60+ GitHub commits later, and I somehow like this version less than the very first commit. The margins between different elements don't look great, and the text sections are less engaging. 
        </p>

        <h2 className="text-2xl font-bold">Early 2025 - v1.2</h2>

        <Figure src="/figures/portfolio-5.png" alt="Portfolio v1.2 screenshot" />

        <p>
        After my previous efforts led in a direction I wasn't fond of, I decided to go for something for more minimal - no images, no big spaces, just one small page with a list of projects.
        </p>

        <p>
        I still like this version a lot, and I think it looks quite nice. However, I realized that a page of solely text isn't the best idea, so I eventually decided on something in-between: a visually appealing homepage, for those who just want a quick look at my site, and informative, article-style pages, for those who are interested to read more:
        </p>

        <h2 className="text-2xl font-bold">Late 2025 - v2.0</h2>

        {/* <Figure src="/figures/portfolio-6.png" alt="Portfolio v2.0 screenshot" /> */}

        <p>
        This is the current version 
        </p>

        <h2 className="text-2xl font-bold">Personal Websites for Inspiration</h2>

        <p>
        Over the past few years, I've been saving portfolio websites from developers and designers around the world. Here are some of my favorites, roughly ordered - even if you're not looking for inspiration, you might have some fun scrolling through these:
        </p>

        <ul className="list-disc list-inside">
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://daliwali.neocities.org/">Daliwali</a> [art, dark, 3D visuals] - check out the interactive art section, really impressive</li> 
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://alyssafaustino.com/">Alyssa Faustino</a> [art, hand-drawn]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://bepatrickdavid.com/">Patrick David</a> [professional, grand, art]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://omni.vi/">Omni</a> [art, dark]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://abdussalam.pk/">Abdus Salam</a> [professional, grand]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.hardeep.space/">Hardeep Gambhir</a> [technology, VCR]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://flo-bit.dev/">Florian</a> [classic, 3D visuals]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.justin-abuyuan.xyz/">Justin Abuyuan</a> [classic, 3D visuals]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://ninacti0n.art/">ninacti0n</a> [art, hand-drawn]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://kianeblackman.com/">Kiane Blackman</a> [colorful, simple]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://indigotrance.com/">Indigotrance</a> [colorful, nostalgic, weird]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://voxal.dev/">Aiden Shi</a> [classic, simple]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://psychicnewborn.neocities.org/">Psychic Newborn</a> [weird, occult]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://jeremiahhaastrup.com/">Jeremiah Haastrup</a> [minimalist]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://marbal.ca/">Marbal Baldwin</a> [simple, ASCII art]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://tamalsen.dev/">Tamal Sen</a> [classic, 3D visuals]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.martintang.me/">Martin Tang</a> [clean, simple]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://masonarmand.com/">Mason Armand</a> [simple, nature]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.elijahkurien.com/">Elijah Kurien</a> [minimalist]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://dziban.net/">Dziban</a> [simple, nature]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://donghwui.com/">Donghwui Kim</a> [classic, 3D visuals]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://gazijarin.com/">Gazi Jarin</a> [classic]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://sharon-yi.com/">Sharon Yi</a> [classic, friendly]</li>
            <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://cade.codes/">Cade Kynaston</a> [classic]</li>
            {/* neon rust n alien dust */}
            {/* living breathing machine */}
        </ul>

        Thanks for reading!

        <Showcase>
            <a href="/" rel="noopener noreferrer">
                <House className="inline-block mr-2" size={20} />
                Back to Homepage
            </a>
        </Showcase>
      </section>
    </main>
  );
}