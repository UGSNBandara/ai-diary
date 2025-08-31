"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import { useDoc } from "../context/DocContext";

const docTitles: Record<string, string> = {
  // Legacy documents
  "ml-intro": "Machine Learning Introduction",
  "dl-basics": "Deep Learning Basics", 
  "rl-overview": "Reinforcement Learning Overview",
  
  // Machine Learning
  "machine-learning__introduction__basics": "Machine Learning - Introduction to Basics",
  "machine-learning__supervised-learning__overview": "Supervised Learning Overview",
  "machine-learning__supervised-learning__algorithms__linear-regression": "Linear Regression",
  "machine-learning__supervised-learning__algorithms__decision-trees": "Decision Trees",
  "machine-learning__supervised-learning__algorithms__svm": "Support Vector Machines",
  "machine-learning__supervised-learning__algorithms__logistic-regression": "Logistic Regression",
  "machine-learning__supervised-learning__algorithms__random-forests": "Random Forests",
  "machine-learning__supervised-learning__algorithms__knn": "K-Nearest Neighbors",
  "machine-learning__supervised-learning__algorithms__naive-bayes": "Naive Bayes",
  "machine-learning__unsupervised-learning__overview": "Unsupervised Learning Overview",
  "machine-learning__applied__overview": "Applied Machine Learning",
  
  // Deep Learning
  "deep-learning__neural-networks__basics": "Deep Learning Basics",
  "deep-learning__neural-networks__training": "Neural Network Training",
  "deep-learning__neural-networks__optimization": "Neural Network Optimization",
  "deep-learning__cnn__introduction": "Convolutional Neural Networks - Introduction",
  "deep-learning__cnn__architecture": "CNN Architecture",
  "deep-learning__cnn__classification": "Image Classification with CNNs",
  "deep-learning__cnn__detection": "Object Detection",
  "deep-learning__rnn__introduction": "Recurrent Neural Networks - Introduction",
  "deep-learning__rnn__lstm": "LSTM Networks",
  "deep-learning__rnn__gru": "GRU Networks",
  "deep-learning__transformers__introduction": "Transformers - Introduction",
  "deep-learning__transformers__attention": "Attention Mechanism",
  "deep-learning__transformers__bert": "BERT",
  "deep-learning__transformers__gpt": "GPT Models",
  "deep-learning__generative__gans": "Generative Adversarial Networks",
  "deep-learning__generative__vaes": "Variational Autoencoders",
  "deep-learning__generative__diffusion": "Diffusion Models",
  
  // Reinforcement Learning
  "reinforcement-learning__overview": "Reinforcement Learning Overview",
  "reinforcement-learning__value-based__q-learning": "Q-Learning",
  "reinforcement-learning__value-based__sarsa": "SARSA",
  "reinforcement-learning__value-based__dqn": "Deep Q-Network (DQN)",
  "reinforcement-learning__policy-based__policy-gradients": "Policy Gradients",
  "reinforcement-learning__policy-based__actor-critic": "Actor-Critic Methods",
  "reinforcement-learning__policy-based__ppo": "Proximal Policy Optimization",
  "reinforcement-learning__multi-agent__introduction": "Multi-Agent RL Introduction",
  
  // AI Agents
  "ai-agents__overview": "AI Agents Overview",
  "ai-agents__langchain__introduction": "LangChain Introduction",
  "ai-agents__langchain__chains": "LangChain Chains",
  "ai-agents__langchain__agents": "LangChain Agents",
  "ai-agents__langgraph__introduction": "LangGraph Introduction",
  "ai-agents__langgraph__workflows": "LangGraph Workflows",
  "ai-agents__prompt-engineering__fundamentals": "Prompt Engineering Fundamentals",
  "ai-agents__prompt-engineering__techniques": "Prompt Engineering Techniques",
  
  // Game AI
  "game-ai__introduction": "AI in Game Development",
  "game-ai__pathfinding__astar": "A* Algorithm",
  "game-ai__pathfinding__dijkstra": "Dijkstra's Algorithm",
  "game-ai__npc__fsm": "Finite State Machines",
  "game-ai__npc__behavior-trees": "Behavior Trees",
  "game-ai__procedural__introduction": "Procedural Generation",
  
  // Human Interaction
  "human-interaction__introduction": "Human-AI Interaction",
  "human-interaction__speech__introduction": "Speech Recognition",
  "human-interaction__vision__introduction": "Computer Vision",
  "human-interaction__conversational__chatbots": "Chatbots",
};// Function to generate a readable title from document path
const getDocumentTitle = (selectedDoc: string): string => {
  if (docTitles[selectedDoc]) {
    return docTitles[selectedDoc];
  }
  
  // Generate title from path: "machine-learning__algorithms__svm" -> "Machine Learning › Algorithms › SVM"
  return selectedDoc
    .replace(/__/g, ' › ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
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
  const { setSelectedDoc } = useDoc();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle clicks on internal links
  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      const target = e.target as HTMLElement;
      console.log('Document click on:', target.tagName);
      
      // Find the closest anchor tag
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        console.log('Anchor href:', href);
        
        if (href && href.startsWith('#doc:')) {
          console.log('Preventing default navigation');
          e.preventDefault();
          e.stopImmediatePropagation();
          
          const docId = href.replace('#doc:', '');
          console.log('Setting doc to:', docId);
          
          setSelectedDoc(docId);
        }
      }
    };

    // Add event listener to the content area
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('click', handleDocumentClick, true);
      
      return () => {
        contentElement.removeEventListener('click', handleDocumentClick, true);
      };
    }
  }, [setSelectedDoc]);

  useEffect(() => {
    if (selectedDoc) {
      fetch(`/api/content/${selectedDoc}`)
        .then((res) => res.json())
        .then(async (data) => {
          if (data.content) {
            const html = await marked.parse(data.content);
            setContent(typeof html === "string" ? html : "Content could not be loaded.");
          } else {
            setContent("Document not found.");
          }
        })
        .catch((error) => {
          console.error("Error loading content:", error);
          setContent("Error loading content. Please try again later.");
        });
    }
  }, [selectedDoc]);

  if (!selectedDoc) {
    return (
      <div className="w-full h-screen overflow-y-auto main-content-bg">
        <div className="max-w-none w-full px-8 py-12 mx-auto">
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl w-full">
              <div dangerouslySetInnerHTML={{ __html: introContent }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-y-auto main-content-bg">
      <div className="max-w-none w-full px-8 py-12 mx-auto">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b pb-4" style={{ color: 'var(--text-main)', borderColor: 'var(--box-border)' }}>
            {getDocumentTitle(selectedDoc)}
          </h2>
          <div className="box">
            <div 
              ref={contentRef}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
