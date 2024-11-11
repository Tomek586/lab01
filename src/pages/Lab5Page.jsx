import React, { useEffect, useReducer, useState } from "react";
import useFetch from "../data/useFetch";
import TableHeader from "../components/TableHeader";
import TableDataReducer from "../data/TableDataReducer";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

const Lab5Page = () => {
	const [posts] = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const [users] = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	const [comments] = useFetch(
		"https://jsonplaceholder.typicode.com/comments"
	);

	const [initialData, setInitialData] = useState([]);
	const [tableData, dispatch] = useReducer(
		TableDataReducer,
		initialData
	);

	useEffect(() => {
		const data = posts.map((p) => ({
			user: users.find((u) => u.id === p.userId),
			post: p,
			comments: comments.filter(
				(c) => c.postId === p.id
			),
		}));
		setInitialData(data);
		dispatch({ type: "RESET", payload: data });
	}, [posts, users, comments]);

	const dispatchSort = (sortType) => {
		if (sortType === "RESET") {
			dispatch({ type: "RESET", payload: initialData });
		} else {
			dispatch({ type: sortType });
		}
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center mb-4">Lab 5 Page</h1>

			{/* Tabela */}
			<table className="table table-bordered table-striped">
				<TableHeader onSort={dispatchSort} />
				<tbody>
					{tableData.map(
						(item, index) => (
							<tr
								key={
									index
								}
							>
								<td>
									<Link
										to={`/lab5/users/${item.user?.id}`}
										className="text-decoration-none text-primary"
									>
										{item
											.user
											?.name ||
											"Unknown"}
									</Link>
								</td>
								<td>
									<Accordion
										title={
											item
												.post
												.title
										}
										content={
											item
												.post
												.body
										}
									/>
								</td>
								<td>
									<Link
										to={`/lab5/posts/${item.post.id}/comments`}
										className="text-decoration-none text-success"
									>
										{
											item
												.comments
												.length
										}
									</Link>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Lab5Page;
