import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
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
				<div className="path">
					<Link href="/users">Users</Link>
				</div>
			</div>
			<ul>
				<li>
					<Link href="/users/yashar">Yashar</Link>
				</li>

				<li>
					<Link href="/users/mmd">Mmd</Link>
				</li>
				<li>
					<Link href="/users/ali">Ali</Link>
				</li>
				<li>
					<Link href="/users/mehdi">Mehdi</Link>
				</li>
			</ul>
		</>
	);
}
