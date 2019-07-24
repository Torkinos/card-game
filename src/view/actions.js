import * as actionType from "./action.types";

export const setName = payload => {
	return { type: actionType.SET_NAME, payload };
};

export const start = () => {
	return { type: actionType.START };
};
