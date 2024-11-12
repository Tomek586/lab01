import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostComments = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchPostAndComments = async () => {
			const postData = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			).then((res) => res.json());
			const commentsData = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}/comments`
			).then((res) => res.json());
			setPost(postData);
			setComments(commentsData);
		};
		fetchPostAndComments();
	}, [id]);

	if (!post) return <p>Loading...</p>;

	return (
		<div className="container my-4">
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="card-title text-primary">{post.title}</h2>
					<p className="card-text">{post.body}</p>
				</div>
			</div>
			<div className="card">
				<div className="card-header">
					<h3 className="text-secondary">Comments</h3>
				</div>
				<ul className="list-group list-group-flush">
					{comments.map((comment) => (
						<li key={comment.id} className="list-group-item">
							<strong>{comment.name} <span className="text-muted">({comment.email})</span></strong>
							<p>{comment.body}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PostComments;
