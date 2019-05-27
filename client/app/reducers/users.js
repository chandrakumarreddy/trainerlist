import { ADD_USER } from "../types";

const initialState = {
	users: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
