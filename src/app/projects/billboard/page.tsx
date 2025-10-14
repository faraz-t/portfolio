"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import Figure from "@/app/components/Figure";
import ImageGlow from "@/app/components/ImageGlow";

export default function BillBoardPage() {
  const codeBlock = `const fetchPolicies = async () => {
  const { data, error } = await supabase
    .from("Policies")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};`;

  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        BillBoard
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/billboard.png" alt="BillBoard project cover" />

      {/* Metadata */}
      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Date
            </div>
            <div className="text-gray-600 dark:text-gray-400">2025</div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Description
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Full-stack policy discussion platform with forums, petitions, polls, maps, AI integration, and more.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["full-stack", "relational-database", "ai"].map((tag) => (
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
              Next.js, React, Typescript, PostgreSQL, Supabase, TailwindCSS, Leaflet.js, OpenAI API, react-icons, tiptap, radix-ui, mapshaper
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">
        <h2 className="text-2xl font-bold">Context</h2>

        <p>
            BillBoard was built by me and 4 of my friends at <a className="font-medium text-blue-600 dark:text-blue-400" href="https://hackthechangeyyc.ca/">HackTheChange 2024</a>, a 24-hour hackathon. We recognized several problems with how people engage with their local government:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>People struggle to keep up to date about new government policies.</li>
            <li>People are often uninformed or misinformed about how our government operates.</li>
            <li>Existing resources are often difficult to access and traditional social media can be susceptible to creating narratives.</li>
        </ul>

        <p>
          These can all be discouraging for people when trying to engage in their local government, so we aimed to create a platform that would make it easier for people to stay informed and engaged.
        </p>

        <h2 className="text-2xl font-bold">Forums, Polls, and Petitions</h2>

        <p>
          The three main features of the BillBoard forums are standard forum-style posts, along with the option to create a poll or a petition. Users can upvote or downvote posts, engage in the comment section, and sort posts by recency or votes. 
        </p>

        <Figure src="/figures/billboard-forums.png" alt="Forums Homepage" caption="Figure 1: Forums homepage" brightness={20} />

        <p>
            Above, you can see that each forum post shows its type (forum/poll/petition), along with the number of votes. There are options to sort by new, top of week, month, or all time. Users can also search for posts by keywords.
        </p>

        <Figure src="/figures/billboard-forum.png" alt="Forum Post Editor" caption="Figure 2: Creating and editing posts" brightness={20} />

        <p>
            We also implemented a powerful text editor for creating and editing posts, with any styling options users might need. 
        </p>

        <h2 className="text-2xl font-bold">Policies</h2>

        <Figure src="/figures/billboard-policies.png" alt="Policies Homepage" caption="Figure 3: Policies homepage" brightness={20} />

        <p>
          On our site, you can find new and proposed legislation straight from the Government of Alberta. We've implemented several features to enhance user experience: you can sort policies by topic or level of government, view the current status of each policy, and get a summary and overview for better understanding. Users can also express their opinions by liking or disliking policies, as well as participate in discussions by posting comments and replying to others.
        </p>

        <Figure src="/figures/billboard-policypage.png" alt="Policy Page" caption="Figure 4: Policy page" brightness={20} />

        <h2 className="text-2xl font-bold">Comment Sections</h2>

        <p>
            One of the most challenging parts of the 24-hour hackathon was implementing a comment section that allowed arbitrarily nested comments. We had to do a lot of brainstorming on what kinds of data structures and implementations would work best, and we ultimately decided to represent each comment as a tree node, where every comment stores an array of its <code>replies</code>. Each comment record in our database has a <code>parent_id</code>: if it's <code>null</code>, the comment is top-level; otherwise, it's a reply to another comment.
        </p>

        <Highlight
        theme={themes.nightOwl}
        code={`function initializeComments(commentsData: Comment[]): Comment[] {
    return commentsData.filter(comment => comment.parent_id === null);
}`}
        language="tsx"
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

        <p>
        Once all comments are fetched, we first extract the top-level ones (those without a <code>parent_id</code>). Then we recursively attach replies by finding their parent comments and pushing them into the parent's <code>replies</code> array. This is where the recursive structure is built:
        </p>

        <Highlight
        theme={themes.nightOwl}
        code={`function initializeChildren(commentsData: Comment[], initializedComments: Comment[]): void {
    commentsData.forEach(comment => {
        if (comment.parent_id !== null) {
        const parent = findCommentByID(initializedComments, comment.parent_id);
        if (parent) parent.replies.push(comment);
        }
    });
}`}
        language="tsx"
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

        <p>
        The <code>findCommentByID</code> function traverses this tree recursively until it finds the right parent, allowing replies to be nested infinitely deep:
        </p>

        <Highlight
        theme={themes.nightOwl}
        code={
        `function findCommentByID(comments: Comment[], id: number): Comment | undefined {
    for (let comment of comments) {
        if (comment.id === id) return comment;
        const found = findCommentByID(comment.replies, id);
        if (found) return found;
    }
    return undefined;
}`}
        language="tsx"
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

        <p>
        Finally, rendering the comment section becomes simple. Each comment is rendered through a <code>&lt;CommentComponent&gt;</code>, which recursively renders its own replies, giving us a fully dynamic and arbitrarily nested comment tree:
        </p>

        <Highlight
        theme={themes.nightOwl}
        code={`{comments.map(comment => (
    <CommentComponent
        key={comment.id}
        comment={comment}
        onReply={addComment}
        content_id={content_id}
    />
))}`}
        language="tsx"
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

        <p>
        Together, this approach ensures that users can reply to any comment at any depth, creating a natural discussion flow with all the features of sites such as Reddit implemented within a single React component tree.
        </p>

        <h2 className="text-2xl font-bold">Maps</h2>

        <p>
        In order to help users better understand their local government representatives, we integrated maps that show electoral districts, constituencies, and wards. Users can hover over any area of the map to see info about their current representatives. This was implemented with Leaflet and GeoJSON data from the City of Calgary and the Government of Alberta.
        </p>

        <Figure src="/figures/billboard-map.png" alt="Maps Integration" caption="Figure 5: Maps integration" brightness={20} />

        <h2 className="text-2xl font-bold">AI Integration</h2>

        <p>
        As a final touch, we built a chatbot using OpenAI's API to allow users to ask any questions they need to efficiently learn about common discussion points on the platform.
        </p>

        <Figure src="/figures/billboard-billy.png" alt="AI Chatbot (Billy)" caption="Figure 6: AI chatbot (Billy)" brightness={20} />
      </section>
    </main>
  );
}