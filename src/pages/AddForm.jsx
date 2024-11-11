import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

const AddForm = () => {
	const { dispatch } = useContext(AppContext);
	const [formData, setFormData] = useState({
		name: "",
		birthDate: "",
		eyeColor: "",
		rating: 0,
	});
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		const newValue = name === "rating" ? Number(value) : value;

		setFormData({ ...formData, [name]: newValue });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Walidacja formularza
		if (formData.name === "") {
			setErrors(["Name is required"]);
			return;
		}

		// Dodaj użytkownika do stanu
		dispatch({
			type: "ADD_ITEM",
			payload: { ...formData, id: Date.now() },
		});

		setFormData({
			name: "",
			birthDate: "",
			eyeColor: "",
			rating: 0,
		});

		navigate("/lab3");
	};

	return (
		<Container className="mt-5">
			<h1>Dodaj użytkownika</h1>
			<div className="text-danger">
				{errors.map((e, i) => (
					<p key={i}>{e}</p>
				))}
			</div>
			<Form
				onSubmit={handleSubmit}
				className="border p-4 rounded shadow"
			>
				<Form.Group controlId="formName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						value={
							formData.name
						}
						onChange={
							handleChange
						}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBirth">
					<Form.Label>
						Birth Date
					</Form.Label>
					<Form.Control
						type="date"
						name="birth"
						value={
							formData.birth
						}
						onChange={
							handleChange
						}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formEyes">
					<Form.Label>
						Eye Color
					</Form.Label>
					<Form.Control
						type="text"
						name="eyes"
						value={
							formData.eyes
						}
						onChange={
							handleChange
						}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formRating">
					<Form.Label>
						Rating (0-10)
					</Form.Label>
					<Form.Control
						type="number"
						name="rating"
						value={
							formData.rating
						}
						onChange={
							handleChange
						}
						min="0"
						max="10"
						required
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
					className="mt-3"
				>
					Add User
				</Button>
			</Form>
		</Container>
	);
};

export default AddForm;
