import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();

	return (
			<ul>
				<li>
					<Link href={`/[section]/[coursename]/[episode]`} as={`/${route.query.section}/${route.query.coursename}/01`}>01 </Link>
				</li>
				<li>
					<Link href={`/[section]/[coursename]/[episode]`} as={`/${route.query.section}/${route.query.coursename}/02`}>02</Link>
				</li>
				<li>
					<Link href={`/[section]/[coursename]/[episode]`} as={`/${route.query.section}/${route.query.coursename}/03`}>03</Link>
				</li>
				<li>
					<Link href={`/[section]/[coursename]/[episode]`} as={`/${route.query.section}/${route.query.coursename}/04`}>04</Link>
				</li>
			</ul>
	);
}
