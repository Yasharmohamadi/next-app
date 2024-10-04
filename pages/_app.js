import "@/styles/globals.css";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function App({ Component, pageProps }) {
	const route = useRouter();
	const goBackHandler = () => {
		route.back();
	};
	return (
		<>
			<div className="path-wrapper">
				<div className="svg-wrapper" onClick={goBackHandler}>
					<svg
						width="15"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
						/>
					</svg>
				</div>
				<div className="path">
					<Link href="/">Home</Link>
				</div>
				{route.query.section && (
					<div className="path">
						<Link href={`/${route.query.section}`}>{route.query.section}</Link>
					</div>
				)}
				{route.query.coursename && (
					<div className="path">
						<Link href={`/${route.query.section}/${route.query.coursename}`}>
							{route.query.coursename}
						</Link>
					</div>
				)}
				{route.query.episode && (
					<div className="path">
						<Link
							href={`/${route.query.section}/${route.query.coursename}/${route.query.episode}`}
						>
							{route.query.episode}
						</Link>{" "}
					</div>
				)}
			</div>
			<Component {...pageProps} />
		</>
	);
}
