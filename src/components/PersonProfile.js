import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RatingBar from "./RatingBar";

const PersonProfile = ({ person, dispatch }) => {
	const [rating, setRating] = useState(person.rating);
	const navigate = useNavigate();

	const handleRate = () => {
		const newRating = rating === 10 ? 0 : rating + 1;

		dispatch({
			type: "rate",
			id: person.id,
			rating: newRating,
		});

		setRating(newRating);
	};

	const handleEditClick = () => {
		navigate(`/lab4/edit/${person.id}`);
	};

	const handleDelete = () => {
		dispatch({
			type: "delete",
			payload: person.id,
		});
	};

	return (
		<div className="card mb-3" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{person.name}</h5>
				<p className="card-text"><strong>ID:</strong> {person.id}</p>
				<p className="card-text"><strong>Data urodzenia:</strong> {person.birth}</p>
				<p className="card-text"><strong>Kolor oczu:</strong> {person.eyes}</p>
				<RatingBar rate={rating} />

				<div className="d-flex justify-content-between mt-3">
					<button className="btn btn-warning" onClick={handleEditClick}>
						Edit
					</button>

					<button className="btn btn-danger" onClick={handleDelete}>
						Delete
					</button>

					<button className="btn btn-primary" onClick={handleRate}>
						Rate
					</button>
				</div>
			</div>
		</div>
	);
};

export default PersonProfile;
