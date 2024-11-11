import React, { useReducer } from "react";
import { data } from "../module-data";
import PersonProfile from "../components/PersonProfile";
import AppReducer from "../data/AppReducer";

function Lab2() {
	const [state, dispatch] = useReducer(AppReducer, data);

	return (
		<div className="container">
			<h1 className="text-center my-4">Profile Osób</h1>
			<div className="row">
				{state.map((person) => (
					<div
						className="col-md-4"
						key={person.id}
					>
						<PersonProfile
							person={
								person
							}
							dispatch={
								dispatch
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Lab2;
