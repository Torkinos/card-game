import * as actionType from "./action.types";
import routes          from "../routes/routes";

const initialState = {
	activePage: "start",
	name:       ""
};

// reducers
export default function(state = initialState, action) {
	switch (action.type) {
		case actionType.SET_NAME:
			return { ...state, name: action.payload };
		case actionType.START:
			return { ...state, activePage: routes.game };
		default:
			return state;
	}
}
