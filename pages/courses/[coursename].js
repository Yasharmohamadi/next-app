import React from "react";
import { useRouter } from "next/router";

export default function CourseDetails() {
	const route = useRouter();
	return (
		<div className="course">
			<h1 className="title">Course Name: </h1>
			<h1 className="routename">{route.query.coursename}</h1>
		</div>
	);
}
