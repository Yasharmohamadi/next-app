import React from "react";
import Link from "next/link";

export default function index() {

	return (
		<>
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
