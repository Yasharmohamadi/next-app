import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();
	const goBackHandler = () => {
		route.back();
	};	return (
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
				<div className="path">
					<Link href={`/users/${route.query.username}`}>
						{route.query.username}
					</Link>
				</div>
			</div>

			<ul>
				<li>
					<Link href={`/users/${route.query.username}/front-end`}>
						Front-End
					</Link>
				</li>
				<li>
					<Link href={`/users/${route.query.username}/back-end`}>Back-End</Link>
				</li>
				<li>
					<Link href={`/users/${route.query.username}/full-stack`}>
						Full-Stack
					</Link>
				</li>
				<li>
					<Link href={`/users/${route.query.username}/devops`}>DevOps</Link>
				</li>
			</ul>
		</>
	);
}
