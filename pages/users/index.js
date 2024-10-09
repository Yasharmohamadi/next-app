import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index(props) {

	return (
		<ul>
			{props.users.map((user) => (
				<li key={user.id}>
					<Link href="/users/[username]" as={`/users/username`}>
						{user.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

// PRE RENDERING
// SSR = server side rendering : getServerSideProps() : send a html page for any user request.
// SSG = static side generation : getStaticProps() :  save html code in a json file when site loaded.
export async function getStaticProps() {
	// here is server side
	let res = await fetch("https://jsonplaceholder.typicode.com/users");
	let users = await res.json();
	return {
		props: { users },
	};
}
