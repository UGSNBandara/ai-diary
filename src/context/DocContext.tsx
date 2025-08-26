"use client";
import React, { createContext, useContext, useState } from "react";

interface DocContextType {
  selectedDoc: string;
  setSelectedDoc: (doc: string) => void;
}

const DocContext = createContext<DocContextType | undefined>(undefined);

export function DocProvider({ children }: { children: React.ReactNode }) {
  const [selectedDoc, setSelectedDoc] = useState("");
  return (
    <DocContext.Provider value={{ selectedDoc, setSelectedDoc }}>
      {children}
    </DocContext.Provider>
  );
}

export function useDoc() {
  const context = useContext(DocContext);
  if (!context) throw new Error("useDoc must be used within a DocProvider");
  return context;
}
