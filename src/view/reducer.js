import * as actionType from "./action.types";
import routes          from "../routes/routes";
import { GAME }        from "../static/constants/constants";

const { hidden } = GAME;

const initialState = {
	activePage: "start",
	name:       "",
	attempts:   3,
	cards:      [
		{ type: hidden },
		{ type: hidden },
		{ type: hidden },
	]
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
