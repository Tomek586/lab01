// components/UserProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

const UserProfile = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const data = await fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`
			).then((res) => res.json());
			setUser(data);
		};
		fetchUser();
	}, [id]);

	if (!user) return <p>Loading...</p>;

	return (
		<div>
			<h2>{user.name}</h2>
			<p>Email: {user.email}</p>
			<p>Phone: {user.phone}</p>
			<p>Username: {user.username}</p>
			<p>Street: {user.address.street}</p>
		</div>
	);
};

export default UserProfile;
