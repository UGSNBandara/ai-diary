import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request, { params }: { params: { doc: string } }) {
  try {
    // Handle hierarchical paths with double underscores as separators
    // e.g., "machine-learning__introduction__basics" -> "machine-learning/introduction/basics.md"
    const docPath = params.doc.replace(/__/g, '/');
    const filePath = path.join(process.cwd(), "src/content", `${docPath}.md`);
    
    if (!fs.existsSync(filePath)) {
      // Check if old flat file exists (for backward compatibility)
      const oldFilePath = path.join(process.cwd(), "src/content", `${params.doc}.md`);
      if (fs.existsSync(oldFilePath)) {
        const content = fs.readFileSync(oldFilePath, "utf-8");
        return NextResponse.json({ content });
      }
      
      // Return default "coming soon" content for missing documents
      const defaultContent = `# Coming Soon

This content is currently being developed. 

## What to expect:
- Comprehensive coverage of **${params.doc.replace(/__/g, ' › ').replace(/-/g, ' ')}**
- Practical examples and implementations
- Step-by-step explanations
- Code samples and best practices

Please check back soon for updates!

---

*Have suggestions for this topic? Feel free to contribute to make this knowledge base even better.*`;
      
      return NextResponse.json({ content: defaultContent });
    }
    
    const content = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ content });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      content: `# Error Loading Content

Sorry, there was an error loading this content. Please try again later.

## Troubleshooting
- Check if the document exists
- Verify the path is correct
- Contact support if the issue persists

Error details: ${error instanceof Error ? error.message : 'Unknown error'}`
    });
  }
}
