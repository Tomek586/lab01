import React, { useState } from "react";

const EditPersonForm = ({ person, onSave, onCancel }) => {
	const [name, setName] = useState(person.name);
	const [birth, setBirth] = useState(person.birth);
	const [eyes, setEyes] = useState(person.eyes);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave({ ...person, name, birth, eyes });
	};

	return (
		<div className="edit-form">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						value={name}
						onChange={(e) =>
							setName(
								e
									.target
									.value
							)
						}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">
						Data urodzenia
					</label>
					<input
						type="date"
						className="form-control"
						value={birth}
						onChange={(e) =>
							setBirth(
								e
									.target
									.value
							)
						}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">
						Kolor oczu
					</label>
					<input
						type="text"
						className="form-control"
						value={eyes}
						onChange={(e) =>
							setEyes(
								e
									.target
									.value
							)
						}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-success"
				>
					Save
				</button>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={onCancel}
				>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default EditPersonForm;
