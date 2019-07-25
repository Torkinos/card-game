import * as actionType from "./action.types";

export const setName = payload => {
	return { type: actionType.SET_NAME, payload };
};

export const start = () => {
	return { type: actionType.START };
};

export const results = () => {
	return { type: actionType.RESULTS };
};

export const choseCard = payload => {
	return { type: actionType.CHOSE_CARD, payload };
};

export const clearCards = () => {
	return { type: actionType.CLEAR_CARDS };
};
