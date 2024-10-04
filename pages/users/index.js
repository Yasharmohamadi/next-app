import React from "react";
import Link from "next/link";

export default function index() {
	return (
		<>
			<h1 className="title"><Link href='/'>Next JS app</Link> / Users</h1>
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
