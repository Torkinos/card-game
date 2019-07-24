import * as actionType from "./action.types";

const initialState = {
	name: ""
};

// reducers
export default function(state = initialState, action) {
	switch (action.type) {
		case actionType.SET_NAME:
			return { ...state, name: action.payload };
		default:
			return state;
	}
}
