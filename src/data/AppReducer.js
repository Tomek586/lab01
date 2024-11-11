export default function AppReducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM": {
			return [...state, action.payload];
		}

		case "edit": {
			return state.map((person) =>
				person.id === action.id
					? { ...action.person }
					: person
			);
		}

		case "rate": {
			return state.map((person) =>
				person.id === action.id
					? {
							...person,
							rating: Math.min(
								Math.max(
									action.rating,
									0
								),
								10
							),
					  }
					: person
			);
		}

		case "delete": {
			return state.filter(
				(person) => person.id !== action.payload
			);
		}

		default:
			return state;
	}
}
