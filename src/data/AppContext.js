import React, { createContext, useReducer } from "react";
import { data } from "../module-data";

const AppContext = createContext();

const initialState = { items: data };

function reducer(state, action) {
	switch (action.type) {
		case "edit":
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.id
						? {
								...action.updatedItem,
						  }
						: item
				),
			};
		case "add":
			return {
				...state,
				items: [...state.items, action.newItem],
			};
		default:
			return state;
	}
}

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AppContext.Provider
			value={{ items: state.items, dispatch }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
