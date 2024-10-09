import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {

	return (
		<>
			<ul>
				<li className="title_child">
					<Link href="/[section]/[coursename]" as='/courses/html'>Html</Link>
				</li>

				<li className="title_child">
					<Link href="/[section]/[coursename]" as='/courses/css'>Css</Link>
				</li>
				<li className="title_child">
					<Link href="/[section]/[coursename]" as='/courses/js'>Js</Link>
				</li>
				<li className="title_child">
					<Link href="/[section]/[coursename]" as='/courses/react'>React</Link>
				</li>
			</ul>
		</>
	);
}
