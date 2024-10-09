import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					<Link href='/users/[username]' as={`/users/username`}>{user.name}</Link>
				</li>
			))}
		</ul>
	);
}
