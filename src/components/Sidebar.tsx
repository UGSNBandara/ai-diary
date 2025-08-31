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
				children: [
					{
						label: "Basics",
						doc: "machine-learning__introduction__basics",
					},
					{
						label: "Data Collecting",
						doc: "machine-learning__introduction__data-collecting",
					}
				],
			},
			{
				label: "Supervised Learning",
				children: [
					{
						label: "Overview",
						doc: "machine-learning__supervised-learning__overview",
					},
					{
						label: "Algorithms",
						children: [
							{ label: "Linear Regression", doc: "machine-learning__supervised-learning__algorithms__linear-regression" },
							{ label: "Decision Trees", doc: "machine-learning__supervised-learning__algorithms__decision-trees" },
							{ label: "Support Vector Machines", doc: "machine-learning__supervised-learning__algorithms__svm" },
							{ label: "Logistic Regression", doc: "machine-learning__supervised-learning__algorithms__logistic-regression" },
							{ label: "Random Forests", doc: "machine-learning__supervised-learning__algorithms__random-forests" },
							{ label: "K-Nearest Neighbors", doc: "machine-learning__supervised-learning__algorithms__knn" },
							{ label: "Naive Bayes", doc: "machine-learning__supervised-learning__algorithms__naive-bayes" },
						],
					},
				],
			},
			{
				label: "Unsupervised Learning",
				children: [
					{
						label: "Overview",
						doc: "machine-learning__unsupervised-learning__overview",
					},
					{
						label: "Algorithms",
						children: [
							{ label: "K-Means Clustering", doc: "machine-learning__unsupervised-learning__algorithms__kmeans" },
							{ label: "Hierarchical Clustering", doc: "machine-learning__unsupervised-learning__algorithms__hierarchical" },
							{ label: "PCA", doc: "machine-learning__unsupervised-learning__algorithms__pca" },
							{ label: "DBSCAN", doc: "machine-learning__unsupervised-learning__algorithms__dbscan" },
						],
					},
				],
			},
			{
				label: "Applied ML",
				doc: "machine-learning__applied__overview",
			},
		],
	},
	{
		name: "Deep Learning",
		sub: [
			{
				label: "Neural Networks",
				children: [
					{ label: "Basics", doc: "deep-learning__neural-networks__basics" },
					{ label: "Training", doc: "deep-learning__neural-networks__training" },
					{ label: "Optimization", doc: "deep-learning__neural-networks__optimization" },
				],
			},
			{
				label: "Convolutional Neural Networks",
				children: [
					{ label: "Introduction", doc: "deep-learning__cnn__introduction" },
					{ label: "Architecture", doc: "deep-learning__cnn__architecture" },
					{ label: "Image Classification", doc: "deep-learning__cnn__classification" },
					{ label: "Object Detection", doc: "deep-learning__cnn__detection" },
				],
			},
			{
				label: "Recurrent Neural Networks",
				children: [
					{ label: "Introduction", doc: "deep-learning__rnn__introduction" },
					{ label: "LSTM", doc: "deep-learning__rnn__lstm" },
					{ label: "GRU", doc: "deep-learning__rnn__gru" },
					{ label: "Sequence Modeling", doc: "deep-learning__rnn__sequence-modeling" },
				],
			},
			{
				label: "Transformers",
				children: [
					{ label: "Introduction", doc: "deep-learning__transformers__introduction" },
					{ label: "Attention Mechanism", doc: "deep-learning__transformers__attention" },
					{ label: "BERT", doc: "deep-learning__transformers__bert" },
					{ label: "GPT", doc: "deep-learning__transformers__gpt" },
				],
			},
			{
				label: "Generative Models",
				children: [
					{ label: "GANs", doc: "deep-learning__generative__gans" },
					{ label: "VAEs", doc: "deep-learning__generative__vaes" },
					{ label: "Diffusion Models", doc: "deep-learning__generative__diffusion" },
				],
			},
		],
	},
	{
		name: "Reinforcement Learning",
		sub: [
			{
				label: "Overview",
				doc: "reinforcement-learning__overview",
			},
			{
				label: "Value-Based Methods",
				children: [
					{ label: "Q-Learning", doc: "reinforcement-learning__value-based__q-learning" },
					{ label: "SARSA", doc: "reinforcement-learning__value-based__sarsa" },
					{ label: "DQN", doc: "reinforcement-learning__value-based__dqn" },
				],
			},
			{
				label: "Policy-Based Methods",
				children: [
					{ label: "Policy Gradients", doc: "reinforcement-learning__policy-based__policy-gradients" },
					{ label: "Actor-Critic", doc: "reinforcement-learning__policy-based__actor-critic" },
					{ label: "PPO", doc: "reinforcement-learning__policy-based__ppo" },
				],
			},
			{
				label: "Multi-Agent RL",
				children: [
					{ label: "Introduction", doc: "reinforcement-learning__multi-agent__introduction" },
					{ label: "Cooperative Learning", doc: "reinforcement-learning__multi-agent__cooperative" },
					{ label: "Competitive Learning", doc: "reinforcement-learning__multi-agent__competitive" },
				],
			},
		],
	},
	{
		name: "AI Agents",
		sub: [
			{
				label: "Overview",
				doc: "ai-agents__overview",
			},
			{
				label: "LangChain",
				children: [
					{ label: "Introduction", doc: "ai-agents__langchain__introduction" },
					{ label: "Chains", doc: "ai-agents__langchain__chains" },
					{ label: "Agents", doc: "ai-agents__langchain__agents" },
				],
			},
			{
				label: "LangGraph",
				children: [
					{ label: "Introduction", doc: "ai-agents__langgraph__introduction" },
					{ label: "Workflows", doc: "ai-agents__langgraph__workflows" },
					{ label: "Use Cases", doc: "ai-agents__langgraph__use-cases" },
				],
			},
			{
				label: "Prompt Engineering",
				children: [
					{ label: "Fundamentals", doc: "ai-agents__prompt-engineering__fundamentals" },
					{ label: "Techniques", doc: "ai-agents__prompt-engineering__techniques" },
					{ label: "Best Practices", doc: "ai-agents__prompt-engineering__best-practices" },
				],
			},
		],
	},
	{
		name: "AI in Game Development",
		sub: [
			{
				label: "Introduction",
				doc: "game-ai__introduction",
			},
			{
				label: "Pathfinding",
				children: [
					{ label: "A* Algorithm", doc: "game-ai__pathfinding__astar" },
					{ label: "Dijkstra's Algorithm", doc: "game-ai__pathfinding__dijkstra" },
					{ label: "Navigation Meshes", doc: "game-ai__pathfinding__navmesh" },
				],
			},
			{
				label: "NPC Behavior",
				children: [
					{ label: "Finite State Machines", doc: "game-ai__npc__fsm" },
					{ label: "Behavior Trees", doc: "game-ai__npc__behavior-trees" },
					{ label: "Goal-Oriented Action Planning", doc: "game-ai__npc__goap" },
				],
			},
			{
				label: "Procedural Generation",
				children: [
					{ label: "Introduction", doc: "game-ai__procedural__introduction" },
					{ label: "Terrain Generation", doc: "game-ai__procedural__terrain" },
					{ label: "Content Generation", doc: "game-ai__procedural__content" },
				],
			},
		],
	},
	{
		name: "Human Interaction",
		sub: [
			{
				label: "Introduction",
				doc: "human-interaction__introduction",
			},
			{
				label: "Speech Recognition",
				children: [
					{ label: "Introduction", doc: "human-interaction__speech__introduction" },
					{ label: "ASR Techniques", doc: "human-interaction__speech__asr" },
					{ label: "Voice Assistants", doc: "human-interaction__speech__assistants" },
				],
			},
			{
				label: "Computer Vision",
				children: [
					{ label: "Introduction", doc: "human-interaction__vision__introduction" },
					{ label: "Face Recognition", doc: "human-interaction__vision__face-recognition" },
					{ label: "Gesture Recognition", doc: "human-interaction__vision__gestures" },
				],
			},
			{
				label: "Conversational AI",
				children: [
					{ label: "Chatbots", doc: "human-interaction__conversational__chatbots" },
					{ label: "Dialogue Systems", doc: "human-interaction__conversational__dialogue" },
					{ label: "Context Understanding", doc: "human-interaction__conversational__context" },
				],
			},
		],
	},
];

function renderSub(sub: SubCategory, setSelectedDoc: (doc: string) => void): React.ReactNode {
	if (sub.children) {
		return (
			<li key={sub.label}>
				<details className="group">
					<summary className="cursor-pointer font-semibold text-base py-1 px-2 rounded transition-colors duration-200" 
						style={{ color: 'var(--text-main)' }}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = 'var(--box-border)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = 'transparent';
						}}>
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
				className="block w-full text-left py-1 px-2 rounded transition-colors duration-200"
				style={{ color: 'var(--text-muted)' }}
				onMouseEnter={(e) => {
					e.currentTarget.style.color = 'var(--primary)';
					e.currentTarget.style.backgroundColor = 'var(--box-border)';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.color = 'var(--text-muted)';
					e.currentTarget.style.backgroundColor = 'transparent';
				}}
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
		<aside className="w-64 h-screen p-4 border-r overflow-y-auto sidebar-bg" 
			style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--sidebar-border)' }}>
			<div className="mb-6">
				<button
					className="w-full text-2xl font-bold py-2 px-2 rounded transition-colors duration-200"
					style={{ color: 'var(--primary)' }}
					onMouseEnter={(e) => {
						e.currentTarget.style.backgroundColor = 'var(--box-border)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.backgroundColor = 'transparent';
					}}
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
								<summary className="cursor-pointer font-semibold text-lg py-2 px-2 rounded transition-colors duration-200"
									style={{ color: 'var(--text-main)' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = 'var(--box-border)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'transparent';
									}}>
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
