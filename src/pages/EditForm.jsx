import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

const EditForm = () => {
    const { id } = useParams(); // Pobiera ID z URL-a
    const { dispatch, items } = useContext(AppContext);
    const navigate = useNavigate(); // Inicjalizuje funkcję nawigacji

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
        navigate("/lab3"); // Przekierowanie do Lab3Page
    };

    if (!person) {
        return <p>Person not found</p>; // Obsługa przypadku, gdy osoba nie istnieje
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input
                    {...register("name", {
                        required: "Name is required",
                        maxLength: { value: 20, message: "Name is too long" },
                    })}
                />
                {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label>Birth Date:</label>
                <input
                    type="date"
                    {...register("birth", {
                        required: "Birth date is required",
                    })}
                />
                {errors.birth && (
                    <p className="error-message">{errors.birth.message}</p>
                )}
            </div>

            <div>
                <label>Eye Color:</label>
                <input
                    {...register("eyes", {
                        required: "Eye color is required",
                        maxLength: {
                            value: 10,
                            message: "Eye color is too long",
                        },
                    })}
                />
                {errors.eyes && (
                    <p className="error-message">{errors.eyes.message}</p>
                )}
            </div>

            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    {...register("rating", {
                        required: "Rating is required",
                        min: { value: 0, message: "Minimum rating is 0" },
                        max: { value: 10, message: "Maximum rating is 10" },
                    })}
                />
                {errors.rating && (
                    <p className="error-message">{errors.rating.message}</p>
                )}
            </div>

            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditForm;
