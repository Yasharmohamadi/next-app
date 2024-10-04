import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
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
				<div className="path">
					<Link href={`/courses/${route.query.coursename}`}>{route.query.coursename}</Link>
				</div>
			</div>

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
