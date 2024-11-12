import React from "react";
import useData from "../hooks/useData"; 
import useDispatch from "../hooks/useDispatch"; 

const FlexContainer = ({ element: Element}) => {
	const data = useData(); 
    const dispatch = useDispatch(); 

	return (
		<div className="d-flex flex-wrap">
			{data.map((item) => (
				<Element
					key={item.id}
					person={item}
					dispatch={dispatch}
				/>
			))}
		</div>
	);
};

export default FlexContainer;
