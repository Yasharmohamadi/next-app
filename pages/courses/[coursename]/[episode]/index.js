import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CourseDetails() {
	const route = useRouter();
	return (
		<h1 className="title">
			<Link href="/">Next JS app</Link> / <Link href="/courses">Courses</Link> /{" "}
			<Link href={`/courses/${route.query.coursename}`}>
				{route.query.coursename}
			</Link>
		</h1>
	);
}
