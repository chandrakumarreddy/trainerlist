import { ADD_ADMIN } from "../types";

const initialState = {
	users: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ADMIN:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
