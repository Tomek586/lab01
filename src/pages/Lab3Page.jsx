import React, { useContext } from "react";
import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile";
import AppContext from "../data/AppContext";

const Lab3Page = () => {
	const { items } = useContext(AppContext);

	return (
		<div className="container">
			<h1>Laboratorium 3</h1>
			<FlexContainer
				element={PersonProfile}
				data={items}
			/>
		</div>
	);
};

export default Lab3Page;
