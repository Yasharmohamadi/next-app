import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();
	return (
		<>
			<h1 className="title">
				<Link href="/">Next JS app</Link> / <Link href="/courses">Courses</Link> / {route.query.coursename}
			</h1>

			<ul>
				<li className="title_child">
					<Link href={`/courses/${route.query.coursename}/01`}>01</Link>
				</li>
				<li className="title_child">
					<Link href={`/courses/${route.query.coursename}/02`}>02</Link>
				</li>
				<li className="title_child">
					<Link href={`/courses/${route.query.coursename}/03`}>03</Link>
				</li>
				<li className="title_child">
					<Link href={`/courses/${route.query.coursename}/04`}>04</Link>
				</li>
			</ul>
		</>
	);
}
