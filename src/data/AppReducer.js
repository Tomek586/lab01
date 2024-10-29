export default function AppReducer(state, action) {
	switch (action.type) {
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
							rating: action.rating,
					  }
					: person
			);
		}

		case "delete":
			return state.filter(
				(person) => person.id !== action.id
			);

		default:
			return state;
	}
}
