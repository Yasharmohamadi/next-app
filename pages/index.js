import React from "react";
import Link from "next/link";

export default function Home() {

	return (
		<ul>
			<li>
				<Link href="/[section]" as="/courses">
					Courses
				</Link>
			</li>
			<li>
				<Link href="/users" as="/users">
					Users
				</Link>
			</li>
		</ul>
	);
}
