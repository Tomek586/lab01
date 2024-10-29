import React from "react";
import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile";
import { data } from "../module-data";

const Lab3Page = () => {
	return (
		<div className="container">
			<h1>Laboratorium 3</h1>
			<FlexContainer
				element={PersonProfile}
				data={data}
			/>
		</div>
	);
};

export default Lab3Page;
