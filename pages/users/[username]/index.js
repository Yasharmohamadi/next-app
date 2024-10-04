import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();
	return (
		<>

			<div className="path-wrapper">
				<div className="path">
					<Link href="/">Next JS app</Link>
				</div>
				<div className="path">
					<Link href="/users">Users</Link>
				</div>
				<div className="path">
					<Link href={`/users/${route.query.username}`}>{route.query.username}</Link>
				</div>
			</div>

			<ul>
				<li className="title_child">
					<Link href={`/users/${route.query.username}/front-end`}>Front-End</Link>
				</li>
				<li className="title_child">
					<Link href={`/users/${route.query.username}/back-end`}>Back-End</Link>
				</li>
				<li className="title_child">
					<Link href={`/users/${route.query.username}/full-stack`}>Full-Stack</Link>
				</li>
				<li className="title_child">
					<Link href={`/users/${route.query.username}/devops`}>DevOps</Link>
				</li>
			</ul>
		</>
	);
}
