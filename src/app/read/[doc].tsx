import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import React from "react";
import matter from "gray-matter";
import { marked } from "marked";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDir);
  return files.map((file) => ({ doc: file.replace(/\.md$/, "") }));
}

export default async function ReadPage({ params }: { params: { doc: string } }) {
  const filePath = path.join(process.cwd(), "src/content", `${params.doc}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const file = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(file);
  const html = marked(content);
  return (
    <div className="box max-w-3xl mx-auto mt-8">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
