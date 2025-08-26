"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";

const docTitles: Record<string, string> = {
  "ml-intro": "Machine Learning Introduction",
  "dl-basics": "Deep Learning Basics",
  "rl-overview": "Reinforcement Learning Overview",
};

const introContent = `
<h1 class="text-4xl font-bold mb-4 text-primary">AI Knowledge Hub</h1>
<p class="text-lg text-muted mb-8 max-w-xl text-center">
  Welcome to your personal knowledge store for everything AI, ML, Deep Learning, Agents, LangGraph, Reinforcement Learning, Game AI, and Human Interaction. Browse categories on the left and start adding your notes and articles!
</p>
<div class="box w-full max-w-2xl">
  <h2 class="text-2xl font-semibold mb-2 text-secondary">How to use:</h2>
  <ul class="list-disc list-inside text-muted">
    <li>Choose a category from the sidebar navigation.</li>
    <li>Explore subcategories for focused topics.</li>
    <li>Add your notes, articles, and practical learnings.</li>
    <li>No login or user profile needed—just pure knowledge!</li>
  </ul>
</div>
`;

export default function ContentBox({ selectedDoc }: { selectedDoc: string }) {
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (selectedDoc) {
      fetch(`/api/content/${selectedDoc}`)
        .then((res) => res.json())
        .then(async (data) => {
          if (data.content) {
            const html = await marked.parse(data.content);
            setContent(typeof html === "string" ? html : "Document not found.");
          } else {
            setContent("Document not found.");
          }
        });
      router.push(`/?doc=${selectedDoc}`);
    }
  }, [selectedDoc]);

  if (!selectedDoc) {
    return (
      <div className="box max-w-3xl mx-auto mt-8">
        <div dangerouslySetInnerHTML={{ __html: introContent }} />
      </div>
    );
  }

  return (
    <div className="box max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-secondary">{docTitles[selectedDoc]}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
