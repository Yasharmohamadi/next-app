import React from "react";
import Link from "next/link";

export default function index() {
	return (
		<>
			<div className="path-wrapper">
				<div className="path">
					<Link href="/">Home</Link>
				</div>
				<div className="path">
					<Link href="/users">Users</Link>
				</div>
			</div>
			<ul>
				<li className="title_child">
					<Link href="/users/yashar">Yashar</Link>
				</li>

				<li className="title_child">
					<Link href="/users/mmd">Mmd</Link>
				</li>
				<li className="title_child">
					<Link href="/users/ali">Ali</Link>
				</li>
				<li className="title_child">
					<Link href="/users/mehdi">Mehdi</Link>
				</li>
			</ul>
		</>
	);
}
