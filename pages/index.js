import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
	const route = useRouter();
	const goBackHandler = () => {
		route.back();
		// route.push('/');
		// route.replace('/');
	};
	return (
		<>
			<ul>
				<li>
					<Link href="/[section]" as='/courses'>Courses</Link>
				</li>
			</ul>
		</>
	);
}
