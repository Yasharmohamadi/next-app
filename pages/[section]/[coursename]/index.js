import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();

	return (
			<ul>
				<li>
					<Link href={`/course/${route.query.course}/01`}>01 </Link>
				</li>
				<li>
					<Link href={`/course/${route.query.course}/02`}>02</Link>
				</li>
				<li>
					<Link href={`/course/${route.query.course}/03`}>03</Link>
				</li>
				<li>
					<Link href={`/course/${route.query.course}/04`}>04</Link>
				</li>
			</ul>
	);
}
