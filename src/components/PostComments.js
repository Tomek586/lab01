// components/PostComments.js
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
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<h3>Comments</h3>
			<ul>
				{comments.map((comment) => (
					<li key={comment.id}>
						<strong>
							{
								comment.name
							}{" "}
							(
							{
								comment.email
							}
							)
						</strong>
						<p>
							{
								comment.body
							}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostComments;
