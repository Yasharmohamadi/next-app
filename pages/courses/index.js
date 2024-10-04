import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
		const route = useRouter();
	return (
		<>
			<h1 className="title"><Link href='/'>Next JS app</Link> / Courses</h1>
			<ul>
				<li className="title_child">
					<Link href="/courses/html">Html</Link>
				</li>

				<li className="title_child">
					<Link href="/courses/css">Css</Link>
				</li>
				<li className="title_child">
					<Link href="/courses/js">Js</Link>
				</li>
				<li className="title_child">
					<Link href="/courses/react">React</Link>
				</li>
			</ul>
		</>
	);
}
