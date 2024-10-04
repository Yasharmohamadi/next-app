import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
		const route = useRouter();
	return (
		<>
			<div className="path-wrapper">
				<div className="path">
					<Link href="/">Home</Link>
				</div>
				<div className="path">
					<Link href="/courses">Courses</Link>
				</div>
			</div>
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
