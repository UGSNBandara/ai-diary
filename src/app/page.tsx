"use client";
import ContentBox from "../components/ContentBox";
import { useDoc } from "../context/DocContext";

export default function Home() {
	const { selectedDoc } = useDoc();
	return (
		<main className="flex-1 p-6 md:p-12">
			<ContentBox selectedDoc={selectedDoc} />
		</main>
	);
}
