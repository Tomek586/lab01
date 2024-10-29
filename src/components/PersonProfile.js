import React, { useState } from "react";
import RatingBar from "./RatingBar";
import EditPersonForm from "./EditPersonForm";

const PersonProfile = ({ person, dispatch }) => {
	const [rating, setRating] = useState(person.rating);
	const [isEditing, setIsEditing] = useState(false);

	const handleRate = () => {
		const newRating = rating === 10 ? 0 : rating + 1;
		setRating(newRating);
		dispatch({
			type: "rate",
			id: person.id,
			rating: newRating,
		});
	};

	const handleEdit = (updatedPerson) => {
		dispatch({
			type: "edit",
			id: person.id,
			person: updatedPerson,
		});
		setIsEditing(false);
	};

	return (
		<div className="card mb-3" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">
					{person.name}
				</h5>
				<p className="card-text">
					<strong>ID:</strong>{" "}
					{person.id}
				</p>
				<p className="card-text">
					<strong>
						Data urodzenia:
					</strong>{" "}
					{person.birth}
				</p>
				<p className="card-text">
					<strong>Kolor oczu:</strong>{" "}
					{person.eyes}
				</p>
				<RatingBar rate={rating} />

				{isEditing ? (
					<EditPersonForm
						person={person}
						onSave={handleEdit}
						onCancel={() =>
							setIsEditing(
								false
							)
						}
					/>
				) : (
					<div className="d-flex justify-content-between mt-3">
						<button
							className="btn btn-warning"
							onClick={() =>
								setIsEditing(
									true
								)
							}
						>
							Edit
						</button>

						<button
							className="btn btn-danger"
							onClick={() =>
								dispatch(
									{
										type: "delete",
										id: person.id,
									}
								)
							}
						>
							Delete
						</button>

						<button
							className="btn btn-primary"
							onClick={
								handleRate
							}
						>
							Rate
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default PersonProfile;
