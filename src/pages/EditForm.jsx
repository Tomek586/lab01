import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

const EditForm = () => {
	const { id } = useParams(); // Pobiera ID z URL-a
	const { dispatch, items } = useContext(AppContext);
	const navigate = useNavigate();

	// Znajduje osobę po ID
	const person = items.find((p) => p.id === Number(id));

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (person) {
			setValue("id", person.id);
			setValue("name", person.name);
			setValue("birth", person.birth);
			setValue("eyes", person.eyes);
			setValue("rating", person.rating);
		}
	}, [person, setValue]);

	const onSubmit = (data) => {
		data["rating"] = parseInt(data["rating"]);
		dispatch({
			type: "edit",
			id: person.id,
			person: data, // Zaktualizowane dane
		});
		navigate("/lab3"); 
	};

	if (!person) {
		return <p>Person not found</p>; 
	}

	return (
		<div className="container my-4">
			<h2 className="text-center mb-4">Edit Person Profile</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow-sm">
				<div className="mb-3">
					<label className="form-label">Name:</label>
					<input
						className="form-control"
						{...register("name", {
							required: "Name is required",
							maxLength: {
								value: 20,
								message: "Name is too long",
							},
						})}
					/>
					{errors.name && (
						<div className="text-danger small">
							{errors.name.message}
						</div>
					)}
				</div>

				<div className="mb-3">
					<label className="form-label">Birth Date:</label>
					<input
						type="date"
						className="form-control"
						{...register("birth", {
							required: "Birth date is required",
						})}
					/>
					{errors.birth && (
						<div className="text-danger small">
							{errors.birth.message}
						</div>
					)}
				</div>

				<div className="mb-3">
					<label className="form-label">Eye Color:</label>
					<input
						className="form-control"
						{...register("eyes", {
							required: "Eye color is required",
							maxLength: {
								value: 10,
								message: "Eye color is too long",
							},
						})}
					/>
					{errors.eyes && (
						<div className="text-danger small">
							{errors.eyes.message}
						</div>
					)}
				</div>

				<div className="mb-3">
					<label className="form-label">Rating:</label>
					<input
						type="number"
						className="form-control"
						{...register("rating", {
							required: "Rating is required",
							min: {
								value: 0,
								message: "Minimum rating is 0",
							},
							max: {
								value: 10,
								message: "Maximum rating is 10",
							},
						})}
					/>
					{errors.rating && (
						<div className="text-danger small">
							{errors.rating.message}
						</div>
					)}
				</div>

				<button type="submit" className="btn btn-primary w-100">
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default EditForm;
