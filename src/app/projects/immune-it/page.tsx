"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Github } from "lucide-react";
import ImageGlow from "@/app/components/ImageGlow";
import Figure from "@/app/components/Figure";
import Showcase from "@/app/components/Showcase";

export default function ImmuneITPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Immune IT
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/immuneit.png" alt="Immune IT project cover" />

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
              Cybersecurity system designed for growing Canadian businesses in healthcare.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["web-app", "ai", "cybersecurity"].map((tag) => (
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
              Claude 3 API, Firebase, Google Cloud, HTML, CSS, JavaScript
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">
        <h2 className="text-2xl font-bold">Introduction</h2>

        <p>
          ImmuneIT was built by me and 3 of my friends at{" "}
          <a
            className="font-medium text-blue-600 dark:text-blue-400"
            href="https://www.ubcbiztech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ProduHacks 2024
          </a>.
        </p>

        <p>
          We identified that healthcare cybercrime is a growing issue in Canada, with the
          healthcare industry having the most expensive data breaches at $14.89 million CAD per
          breach. Furthermore, in Canada, 48% of all security breaches were in the healthcare
          industry.
        </p>

        <p>
          Human error accounts for about 74% of data breaches. At the same time, 78% of doctors
          and 89% of nurses report receiving no formal cybersecurity training, leaving many
          healthcare organizations exposed.
        </p>

        <h2 className="text-2xl font-bold">Solution</h2>

        <p>
          ImmuneIT is a cybersecurity training system designed for both employees and managers in
          the healthcare industry. The platform contains comprehensive training modules for
          employees to learn about cybersecurity best practices. Managers can curate courses,
          assign content, monitor progress, and run safe phishing simulations to measure real-world
          preparation.
        </p>

        <Figure
          src="/figures/immuneit-1.png"
          alt="Employee dashboard"
          caption="Figure 1: Employee dashboard."
          brightness={20}
        />

        <p>
        The employee dashboard provides a view of their training progress and skill levels across key areas.
        </p>

        <Figure
          src="/figures/immuneit-2.png"
          alt="Course quiz question interface"
          caption="Figure 2: Course quiz question interface."
          brightness={20}
        />

        <p>
        Courses include interactive quizzes to reinforce learning.
        </p>

        <Figure
          src="/figures/immuneit-3.png"
          alt="Manager dashboard"
          caption="Figure 3: Manager dashboard."
          brightness={20}
        />

        <p>
        Managers have access to a dedicated dashboard where they can create and assign training modules, including quiz questions. This view provides insights into team progress and skill levels, allowing managers to identify employees who may need additional support.
        </p>

        <h2 className="text-2xl font-bold">AI Integration</h2>

        <p>
        Using the Claude 3 API, ImmuneIT offers AI-assisted generation of phishing emails to realistically simulate cyberattack scenarios. Managers can specify parameters such as the organization name, sender, contact details, and other contextual information to create tailored phishing campaigns.
        </p>

        <Figure
          src="/figures/immuneit-4.png"
          alt="AI phishing email generation form"
          caption="Figure 4: AI phishing email generation form."
          brightness={20}
        />

        <Figure
          src="/figures/immuneit-5.png"
          alt="Results of phishing generator"
          caption="Figure 5: Results of phishing generator."
          brightness={20}
        />

        <h2 className="text-2xl font-bold">Firebase Integration</h2>
        <p>
          All platform data is stored and synchronized in Firebase. Managers, employees, questions,
          and progress metrics are managed through a real-time database with read/write rules
          enforced for secure access.
        </p>

        <p>
        As an example, here is the code for adding and retrieving quiz questions from the Firebase database:
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`async function addQuestion(question) {
    const currentNumQuestions = getQuestionCount();
    const newQuestionRef = ref(db, "questions/" + currentNumQuestions);
    set(newQuestionRef, question);
    set(ref(db, "questionCount"), currentNumQuestions + 1);

    let currentTypeCount = await get(ref(db, "questionTypeCounts/" + question.category)).then((snapshot) => {
        return snapshot.val();
    });
    set(ref(db, "questionTypeCounts/" + question.category), currentTypeCount + 1);
}

window.addQuestion = addQuestion;

async function getQuestions() {
    return await get(ref(db, "questions")).then((snapshot) => {
        return snapshot.val();
    });
}

window.getQuestions = getQuestions;`}
          language="tsx"
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
          If you're interested to learn more about the business side of ImmuneIT, check out our presentation slides:
        </p>

        <Showcase>
          <a
            href="https://docs.google.com/presentation/d/1-n3TxJ4DZhrRjitv1J1P5_ZW9XMXZCaXeIF2ptuVyGc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="inline-block mr-2" size={20} />
            ImmuneIT Presentation
          </a>
        </Showcase>
      </section>
    </main>
  );
}
