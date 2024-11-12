const TableDataReducer = (state, action) => {
	switch (action.type) {
		case "SORT_USERNAME_ASC":
			return [...state].sort((a, b) =>
				a.user?.name.localeCompare(b.user?.name)
			);
		case "SORT_USERNAME_DESC":
			return [...state].sort((a, b) =>
				b.user?.name.localeCompare(a.user?.name)
			);
		case "SORT_TITLE_ASC":
			return [...state].sort((a, b) =>
				a.post.title.localeCompare(b.post.title)
			);
		case "SORT_TITLE_DESC":
			return [...state].sort((a, b) =>
				b.post.title.localeCompare(a.post.title)
			);
		case "RESET":
			return action.payload;
		default:
			return state;
	}
};

export default TableDataReducer;
