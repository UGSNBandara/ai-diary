import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request, { params }: { params: { doc: string } }) {
  const filePath = path.join(process.cwd(), "src/content", `${params.doc}.md`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }
  const content = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({ content });
}
