import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();
	return (
		<div className="path-wrapper">
			<div className="path">
				<Link href="/">Next JS app</Link>
			</div>
			<div className="path">
				<Link href="/courses">Courses</Link>
			</div>
			<div className="path">
				<Link href={`/courses/${route.query.coursename}`}>
					{route.query.coursename}
				</Link>
			</div>
			<div className="path">
				<Link href={`/courses/${route.query.coursename}/${route.query.episode}`}>
					{route.query.episode}
				</Link>{" "}
			</div>
		</div>
	);
}
