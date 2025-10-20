"use client";

import React from "react";
import { Github, House } from "lucide-react";
import ImageGlow from "@/app/components/ImageGlow";
import Showcase from "@/app/components/Showcase";
import Figure from "@/app/components/Figure";

export default function InsightUBCPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        InsightUBC
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/insightubc.png" alt="InsightUBC project cover" />

      {/* Metadata */}
      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Date
            </div>
            <div className="text-gray-600 dark:text-gray-400">2024</div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Description
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Full-stack application using a RESTful API to query and visualize UBC course and room datasets, built for CPSC 310: Software Engineering.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["full-stack", "rest-api", "data-viz"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Technologies
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              TypeScript, Node.js, Express.js, REST API, Mocha/Chai, React, TailwindCSS
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p>
            InsightUBC is a project I built in CPSC 310 (Software Engineering) at UBC. It is the only non-personal project I've decided to showcase on this site, as I believe it is the most intricate project I've worked on in a university course.
        </p>

        <p>
            It's a full-stack application that parses, stores, and queries datasets with information about tens of thousands of UBC courses and rooms. The main objective was to create a functional query engine and RESTful API that operates similarly to a lightweight database system.
        </p>

        <h2 className="text-2xl font-bold">Backend</h2>

        <p>
            The main focus of InsightUBC is its backend, which implements a query engine capable of handling complex queries on uploaded datasets. The server is built with Node.js and Express.js, exposing RESTful endpoints for dataset management and querying.
        </p>

        <p>
          Two datasets were supported:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>
            <code>courses.zip</code>: contains UBC course data including{" "}
            <code>Department</code>, <code>Instructor</code>, <code>Year</code>,{" "}
            <code>Avg</code>, and <code>Pass</code> rates.
        </li>
        <li>
            <code>rooms.zip</code>: contains spatial data for UBC buildings, parsed from{" "}
            <code>index.htm</code> files and <code>.geojson</code> maps to extract{" "}
            <code>lat</code>, <code>lon</code>, and <code>seating capacity</code>.
        </li>
        </ul>

        <p>
          When you upload a dataset, the server parses and validates it and keeps a
          cleaned, normalized copy in memory. You interact with that data by sending a
          JSON query to the <code>/query</code> endpoint; the endpoint understands a
          compact query format that supports:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><code>WHERE</code> filters (e.g. by department or average grade)</li>
          <li><code>OPTIONS</code> for selecting and ordering fields</li>
          <li><code>GROUP</code> and <code>APPLY</code> for aggregations (e.g. average by instructor)</li>
        </ul>

        <p>
          The query engine evaluates each request by recursively traversing the query tree, applying
          filters and transformations before returning JSON-formatted results to the client.
        </p>

        <h2 className="text-2xl font-bold">Testing & Development</h2>

        <p>
          Our project was rigorously tested using <code>Mocha</code> and <code>Chai</code> for unit
          and integration tests, ensuring full correctness against hundreds of automated test cases. Testing was one of the main focuses of this project, and is one of the most useful skills I learned from this course.
        </p>

        <h2 className="text-2xl font-bold">Frontend</h2>

        <p>
          We built a simple React frontend to interact with the backend API:
        </p>

        <Figure src="/figures/insightubc-1.png" alt="Course Averages Visualization" caption="Figure 1: Visualizing course averages"/>

        <Figure src="/figures/insightubc-2.png" alt="Enrollment Count Visualization" caption="Figure 2: Visualizing course enrollment counts"/>

        <Showcase>
          <a href="/" rel="noopener noreferrer" className="inline-flex items-center">
            <House className="inline-block mr-2" size={20} />
            Back to Homepage
          </a>
        </Showcase>
      </section>
    </main>
  );
}
