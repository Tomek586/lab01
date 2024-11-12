import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
		<div className="container my-4">
			<div className="card">
				<div className="card-header text-primary">
					<h2 className="mb-0">{user.name}</h2>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<strong>Email:</strong> {user.email}
					</li>
					<li className="list-group-item">
						<strong>Phone:</strong> {user.phone}
					</li>
					<li className="list-group-item">
						<strong>Username:</strong> {user.username}
					</li>
					<li className="list-group-item">
						<strong>Street:</strong> {user.address.street}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserProfile;
