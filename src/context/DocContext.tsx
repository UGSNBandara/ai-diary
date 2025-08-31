"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface DocContextType {
  selectedDoc: string;
  setSelectedDoc: (doc: string) => void;
}

const DocContext = createContext<DocContextType | undefined>(undefined);

export function DocProvider({ children }: { children: React.ReactNode }) {
  const [selectedDoc, setSelectedDoc] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // Sync selectedDoc with URL parameters
  useEffect(() => {
    const docFromUrl = searchParams.get('doc');
    if (docFromUrl && docFromUrl !== selectedDoc) {
      setSelectedDoc(docFromUrl);
    }
  }, [searchParams, selectedDoc]);

  // Function to update both state and URL
  const updateSelectedDoc = (doc: string) => {
    setSelectedDoc(doc);
    // Only update URL if it's different from current
    const currentDoc = searchParams.get('doc');
    if (currentDoc !== doc) {
      router.replace(`/?doc=${doc}`);
    }
  };

  return (
    <DocContext.Provider value={{ selectedDoc, setSelectedDoc: updateSelectedDoc }}>
      {children}
    </DocContext.Provider>
  );
}

export function useDoc() {
  const context = useContext(DocContext);
  if (!context) throw new Error("useDoc must be used within a DocProvider");
  return context;
}
