import * as actionType from "./action.types";
import routes          from "../routes/routes";
import { GAME }        from "../static/constants/constants";

const { ball, cross, hidden } = GAME;

const initialState = {
	activePage: routes.results,
	name:       "",
	attempts:   3,
	points:     0,
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
		case actionType.GAME:
			return { ...state, activePage: routes.game };
		case actionType.RESULTS:
			return { ...state, activePage: routes.results };
		case actionType.CHOSE_CARD:
			return choseCard(state, action.payload);
		case actionType.CLEAR_CARDS:
			return clearCards(state);
		default:
			return state;
	}
}

const choseCard = (state, payload) => {

	const roll = Math.floor(Math.random() * 3);

	const success = roll < 1;

	// if user guess show ball
	const type = success
							 ? ball
							 : cross;

	// if user guess add point
	const points = success
								 ? state.points + 1
								 : state.points;

	return {
		...state,
		points,
		attempts: state.attempts - 1,
		cards:    state.cards.map((item, index) => {
			if (index !== payload) {
				return item;
			}

			return {
				...item,
				type
			};
		})
	};
};

const clearCards = state => {
	return {
		...state,
		cards: state.cards.map(item => {
			return {
				...item,
				type: hidden
			};
		})
	};
};
