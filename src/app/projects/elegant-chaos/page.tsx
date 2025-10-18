"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Github } from "lucide-react";
import ImageGlow from "@/app/components/ImageGlow";
import Figure from "@/app/components/Figure";
import Showcase from "@/app/components/Showcase";

export default function ElegantChaosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Elegant Chaos
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/elegantchaos.png" alt="Elegant Chaos project cover" />

      {/* Metadata */}
      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Date
            </div>
            <div className="text-gray-600 dark:text-gray-400">2023</div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Description
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Tool for visualizing chaotic mathematical systems based on x-y-time equations.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["mathematics", "algorithms"].map((tag) => (
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
              JavaScript, Canvas API, HTML
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">
        <h2 className="text-2xl font-bold">Introduction</h2>

        <p>
          ElegantChaos was one of the first personal projects I built outside of schoolwork. I spent a lot of time learning about the underlying math of chaotic systems and I wanted to create a tool that could visualize these fascinating patterns. 
        </p>

        <h2 className="text-2xl font-bold">How It Works</h2>

        <p>
          At each time step <code>t</code>, the system maintains a collection of points. 
          The next position of each point is determined by evaluating two mathematical 
          functions: one for the x-coordinate and one for the y-coordinate, using the point's 
          current coordinates and the current time step as inputs:
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`function next(pos, t) {
    let x = pos[0];
    let y = pos[1];
    return [
        x_func.evaluate({x: x, y: y, t: t}), 
        y_func.evaluate({x: x, y: y, t: t})
    ];
}`}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`}
              style={style}
            >
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

        <p>
          For each frame, we generate a "time instance": a snapshot of multiple points 
          at a specific moment.
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`timeInstance = [
  [x1, y1],
  [x2, y2],
  [x3, y3],
  ...
  [x_num_points, y_num_points]
]`}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`}
              style={style}
            >
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

        <p>
          The visualization maintains a rolling history of these time instances, creating a flowing and connected pattern. Points can be 
          rendered individually or connected with smooth Bezier curves, resulting in fascinating visual effects.
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`let currentTimeInstances = [];
window.mainLoop = setInterval(() => {
    // stop loop if t_final is reached
    if (t >= t_final) {
        stop();
    }

    // create constantly updating array of time instances, for the trail (length = trail_length)
    if (currentTimeInstances.length < trail_length) {
        currentTimeInstances.unshift(makeTimeInstance(t, num_points));
    } else {
        currentTimeInstances.unshift(makeTimeInstance(t, num_points));
        currentTimeInstances.pop();
    }

    // clear canvas
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    if (connect_trail == "false") { // draws points alone
        for (let i = 0; i < currentTimeInstances.length; i++) {
            for (let j = 0; j < currentTimeInstances[i].length; j++) {
                ctx.fillStyle = toColor(j, color_scheme);
                ctx.beginPath();
                ctx.arc(currentTimeInstances[i][j][0] * x_scale - x_offset, currentTimeInstances[i][j][1] * y_scale - y_offset, point_size, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    } else { // connects trail with bezier curve
        let grouped = crossArray(currentTimeInstances);
        for (let i = 0; i < grouped.length; i++) {
            ctx.strokeStyle = toColor(i, color_scheme);
            bezierCurveThrough(ctx, grouped[i].map((point) => [point[0] * x_scale - x_offset, point[1] * y_scale +-y_offset]), 0.25, point_size);
        } 
    }

    // increment t, display t
    t += t_rate;
    document.getElementById("t").innerHTML = customRound(t, 8);
}, 10);`}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`}
              style={style}
            >
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

        <h2 className="text-2xl font-bold">Showcase</h2>

        <Figure src="/figures/elegantchaos-1.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-2.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-3.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-4.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-5.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-6.png" alt="ElegantChaos Art" />

        <Figure src="/figures/elegantchaos-7.png" alt="ElegantChaos Art" />

        <p>
          It's hard to see how these look in motion with just pictures. I recommend you click the link below and try some of the presets! 
        </p>

        <Showcase>
            <a href="https://farazht.github.io/elegantchaos/" target="_blank" rel="noopener noreferrer">
                <Github className="inline-block mr-2" size={20} />
                Live Demo
            </a>
        </Showcase>
      </section>
    </main>
  );
}