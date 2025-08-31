"use client";
import ContentBox from "../components/ContentBox";
import { useDoc } from "../context/DocContext";

export default function Home() {
	const { selectedDoc } = useDoc();
	return (
		<main className="flex-1">
			<ContentBox selectedDoc={selectedDoc} />
		</main>
	);
}
