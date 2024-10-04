import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="path-wrapper">
				<div className="path">
					<Link href="/">Next JS app</Link>
				</div>
			</div>
			<ul>
				<li>
					<Link href="/courses">Courses</Link>
				</li>
				<li>
					<Link href="/users">Users</Link>
				</li>
			</ul>
		</>
	);
}
