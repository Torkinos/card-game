import { combineReducers } from "redux";
import * as actionType     from "../view/action.types";

import view from "../view/reducer";

const appReducer = combineReducers({
	view,
});

const rootReducer = (state, action) => {
	if (action.type === actionType.START) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
