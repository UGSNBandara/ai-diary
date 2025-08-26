"use client";
import React from "react";
import { useDoc } from "../context/DocContext";

interface SubCategory {
	label: string;
	doc?: string;
	children?: SubCategory[];
}

const categories: { name: string; sub: SubCategory[] }[] = [
	{
		name: "Machine Learning",
		sub: [
            {
				label: "Introduction",
				doc: "ml-intro",
			},
			{
				label: "Supervised Learning",
				doc: "ml-intro",
				children: [
					{
						label: "Introduction",
						doc: "ml-intro",
					},
					{
						label: "Algorithms",
						children: [
							{ label: "Linear Regression", doc: "ml-intro" },
							{ label: "Logistic Regression", doc: "ml-intro" },
							{ label: "Decision Trees", doc: "ml-intro" },
							{ label: "Random Forests", doc: "ml-intro" },
							{ label: "Support Vector Machines", doc: "ml-intro" },
							{ label: "K-Nearest Neighbors", doc: "ml-intro" },
							{ label: "Naive Bayes", doc: "ml-intro" },
						],
					},
				],
			},
			{
				label: "Unsupervised Learning",
				doc: "ml-intro",
				children: [
					{
						label: "Introduction",
						doc: "ml-intro",
					},
					{
						label: "Algorithms",
						children: [
							{ label: "K-Means Clustering", doc: "ml-intro" },
							{ label: "Hierarchical Clustering", doc: "ml-intro" },
							{ label: "PCA", doc: "ml-intro" },
							{ label: "DBSCAN", doc: "ml-intro" },
						],
					},
				],
			},
			{
				label: "Reinforcement Learning",
				doc: "rl-overview",
				children: [
					{
						label: "Introduction",
						doc: "rl-overview",
					},
					{
						label: "Algorithms",
						children: [
							{ label: "Q-Learning", doc: "rl-overview" },
							{ label: "SARSA", doc: "rl-overview" },
							{ label: "Policy Gradients", doc: "rl-overview" },
							{ label: "DQN", doc: "rl-overview" },
						],
					},
				],
			},
			{
				label: "Applied ML",
				doc: "ml-intro",
			},
		],
	},
	{
		name: "Deep Learning",
		sub: [
			{
				label: "Introduction",
				doc: "dl-basics",
			},
			{
				label: "Feedforward Neural Networks",
				children: [
					{ label: "Introduction", doc: "dl-basics" },
					{ label: "Theory", doc: "dl-basics" },
					{ label: "Applications", doc: "dl-basics" },
				],
			},
			{
				label: "Convolutional Neural Networks (CNNs)",
				children: [
					{ label: "Introduction", doc: "dl-basics" },
					{ label: "Theory", doc: "dl-basics" },
					{ label: "Image Classification", doc: "dl-basics" },
					{ label: "Object Detection", doc: "dl-basics" },
				],
			},
			{
				label: "Recurrent Neural Networks (RNNs)",
				children: [
					{ label: "Introduction", doc: "dl-basics" },
					{ label: "Theory", doc: "dl-basics" },
					{ label: "Sequence Modeling", doc: "dl-basics" },
				],
			},
			{
				label: "Transformers",
				children: [
					{ label: "Introduction", doc: "dl-basics" },
					{ label: "Theory", doc: "dl-basics" },
					{ label: "NLP Applications", doc: "dl-basics" },
				],
			},
			{
				label: "Generative Models",
				children: [
					{ label: "GANs", doc: "dl-basics" },
					{ label: "VAEs", doc: "dl-basics" },
				],
			},
			{
				label: "Applied DL",
				doc: "dl-basics",
			},
		],
	},
	{
		name: "AI Agents",
		sub: [
			{
				label: "Introduction",
				doc: "ml-intro",
			},
			{
				label: "LangGraph",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Use Cases", doc: "ml-intro" },
				],
			},
			{
				label: "Prompt Engineering",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Techniques", doc: "ml-intro" },
				],
			},
			{
				label: "Agent Architectures",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Practical Agents", doc: "ml-intro" },
				],
			},
		],
	},
	{
		name: "Reinforcement Learning",
		sub: [
			{
				label: "Introduction",
				doc: "rl-overview",
			},
			{
				label: "Algorithms",
				children: [
					{ label: "Q-Learning", doc: "rl-overview" },
					{ label: "SARSA", doc: "rl-overview" },
					{ label: "Policy Gradients", doc: "rl-overview" },
					{ label: "DQN", doc: "rl-overview" },
				],
			},
			{
				label: "Multi-Agent RL",
				children: [
					{ label: "Introduction", doc: "rl-overview" },
					{ label: "Theory", doc: "rl-overview" },
				],
			},
			{
				label: "Practical RL",
				doc: "rl-overview",
			},
		],
	},
	{
		name: "AI in Game Development",
		sub: [
			{
				label: "Introduction",
				doc: "ml-intro",
			},
			{
				label: "Pathfinding",
				children: [
					{ label: "A* Algorithm", doc: "ml-intro" },
					{ label: "Dijkstra's Algorithm", doc: "ml-intro" },
				],
			},
			{
				label: "NPC Behavior",
				children: [
					{ label: "Finite State Machines", doc: "ml-intro" },
					{ label: "Behavior Trees", doc: "ml-intro" },
				],
			},
			{
				label: "Procedural Generation",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
				],
			},
			{
				label: "Practical Game AI",
				doc: "ml-intro",
			},
		],
	},
	{
		name: "Human Interaction",
		sub: [
			{
				label: "Introduction",
				doc: "ml-intro",
			},
			{
				label: "Speech Recognition",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Techniques", doc: "ml-intro" },
				],
			},
			{
				label: "Vision AI",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Applications", doc: "ml-intro" },
				],
			},
			{
				label: "Chatbots",
				children: [
					{ label: "Introduction", doc: "ml-intro" },
					{ label: "Techniques", doc: "ml-intro" },
				],
			},
			{
				label: "Practical AI",
				doc: "ml-intro",
			},
		],
	},
];

function renderSub(sub: SubCategory, setSelectedDoc: (doc: string) => void): React.ReactNode {
	if (sub.children) {
		return (
			<li key={sub.label}>
				<details className="group">
					<summary className="cursor-pointer font-semibold text-base text-gray-700 dark:text-gray-200 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
						{sub.label}
					</summary>
					<ul className="ml-4 mt-1 space-y-1">
						{sub.children.map((child) => renderSub(child, setSelectedDoc))}
					</ul>
				</details>
			</li>
		);
	}
	return (
		<li key={sub.label}>
			<button
				className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
				onClick={() => sub.doc && setSelectedDoc(sub.doc)}
			>
				{sub.label}
			</button>
		</li>
	);
}

const appName = "AI Diary";

export default function Sidebar() {
	const { setSelectedDoc } = useDoc();
	return (
		<aside className="w-64 bg-gray-50 dark:bg-gray-900 h-screen p-4 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
			<div className="mb-6">
				<button
					className="w-full text-2xl font-bold text-primary dark:text-blue-400 py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					onClick={() => setSelectedDoc("")}
				>
					{appName}
				</button>
			</div>
			<nav>
				<ul className="space-y-2">
					{categories.map((cat) => (
						<li key={cat.name}>
							<details className="group">
								<summary className="cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-100 py-2 px-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
									{cat.name}
								</summary>
								<ul className="ml-4 mt-2 space-y-1">
									{cat.sub.map((sub) => renderSub(sub, setSelectedDoc))}
								</ul>
							</details>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
