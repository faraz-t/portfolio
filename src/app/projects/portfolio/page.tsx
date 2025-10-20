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
        In hindsight, I don't like this version as much as the original - the margins between different elements don't look great, and the text sections are less engaging.
        </p>

        <h2 className="text-2xl font-bold">Early 2025 - v1.2</h2>

        <Figure src="/figures/portfolio-5.png" alt="Portfolio v1.2 screenshot" />

        <p>
        After my previous efforts led in a direction I wasn't fond of, I decided to go for something for more minimal - no images, no big spaces, just one small page with a list of projects.
        </p>

        <p>
        I still like this version a lot, but I realized that a page of solely text isn't the best idea, so I eventually decided to try and create something in-between: a visually appealing homepage, for those who just want a quick look at my site, and informative, article-style pages, for those who are interested to read more.
        </p>

        <h2 className="text-2xl font-bold">Late 2025 - v2.0</h2>

        <p>
        This is the current version of the website <i>(I assume a screenshot isn't necessary).</i>
        </p>

        <p>
        I wanted to go for something more professional and modern, and was inspired by the <a className="font-medium text-blue-600 dark:text-blue-400" href="https://once-ui.com/">OnceUI</a> design system. However, instead of building with OnceUI, I just opted to create my own components from scratch.
        </p>

        <p>
        As you can probably tell, I used a lot of gradients and glows in this version:
        </p>

        <h3 className="font-semibold mt-4 mb-2">Mouse Glow</h3>
        <Highlight
          theme={themes.nightOwl}
          code={`<div 
    className="pointer-events-none fixed inset-0 z-[-1]"
    style={{
        background: 'radial-gradient(400px circle at \${pos.x}px \${pos.y}px, rgba(var(--foreground-rgb), 0.1), transparent 80%)',
        transition: "background 0.1s ease-out",
    }}
/>`}
          language="html"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <h3 className="font-semibold mt-4 mb-2">Image Glow</h3>
        <Highlight
          theme={themes.nightOwl}
          code={`<div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px] scale-[1.2] opacity-80 rounded-xl w-full h-full"
    style={{
        backgroundImage: \`url(\${src})\`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(100px) saturate(500%) brightness(60%)",
    }}
></div>`}
          language="html"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <h3 className="font-semibold mt-4 mb-2">Title Gradient</h3>
        <Highlight
          theme={themes.nightOwl}
          code={`.gradient-text {
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(270deg, #ffffff, #a1c4fd, #c2e9fb, #a18cd1, #fbc2eb, #ffffff);
    background-size: 800% 100%;
    animation: shimmer 8s linear infinite;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(161, 196, 253, 0.4), 0 0 24px rgba(194, 233, 251, 0.3);
}
@keyframes shimmer {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}`}
          language="css"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        

        <h2 className="text-2xl font-bold">Personal Websites for Inspiration</h2>

        <p>
        Over the past few years, I've been saving portfolio websites from developers and designers around the world. Here are some of my favorites - even if you're not looking for inspiration, you might have some fun scrolling through these:
        </p>

        <h3 className="font-semibold mt-4 mb-2">Artistic & Unique</h3>
        <ul className="list-disc list-inside">
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://alyssafaustino.com/" target="_blank" rel="noopener noreferrer">Alyssa Faustino</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://bepatrickdavid.com/" target="_blank" rel="noopener noreferrer">Patrick David</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://daliwali.neocities.org/" target="_blank" rel="noopener noreferrer">Daliwali</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://omni.vi/" target="_blank" rel="noopener noreferrer">Omni</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://ninacti0n.art/" target="_blank" rel="noopener noreferrer">ninacti0n</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://psychicnewborn.neocities.org/" target="_blank" rel="noopener noreferrer">Psychic Newborn</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://indigotrance.com/" target="_blank" rel="noopener noreferrer">Indigotrance</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.hardeep.space/" target="_blank" rel="noopener noreferrer">Hardeep Gambhir</a></li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Clean & Professional</h3>
        <ul className="list-disc list-inside">
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://flo-bit.dev/" target="_blank" rel="noopener noreferrer">Florian</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.justin-abuyuan.xyz/" target="_blank" rel="noopener noreferrer">Justin Abuyuan</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://voxal.dev/" target="_blank" rel="noopener noreferrer">Aiden Shi</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://tamalsen.dev/" target="_blank" rel="noopener noreferrer">Tamal Sen</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://abdussalam.pk/" target="_blank" rel="noopener noreferrer">Abdus Salam</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.martintang.me/" target="_blank" rel="noopener noreferrer">Martin Tang</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://jeremiahhaastrup.com/" target="_blank" rel="noopener noreferrer">Jeremiah Haastrup</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://www.elijahkurien.com/" target="_blank" rel="noopener noreferrer">Elijah Kurien</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://kianeblackman.com/" target="_blank" rel="noopener noreferrer">Kiane Blackman</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://myrdin.cx/" target="_blank" rel="noopener noreferrer">Myrdin</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://masonarmand.com/" target="_blank" rel="noopener noreferrer">Mason Armand</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://dziban.net/" target="_blank" rel="noopener noreferrer">Dziban</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://oragejuice.vodka/" target="_blank" rel="noopener noreferrer">Orage Juice</a></li>
          <li><a className="font-medium text-blue-600 dark:text-blue-400" href="https://marbal.ca/" target="_blank" rel="noopener noreferrer">Marbal Baldwin</a></li>
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