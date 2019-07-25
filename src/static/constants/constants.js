export const START = {
	chatOne:    "Hello!",
	chatTwo:    `To begin with the <span>Game</span>, fill in your name below!`,
	inputLabel: "Name",
	button:     "Start"
};

export const GAME = {
	chatOne: name => `Nice to meet you ${ name }!`,
	chatTwo: num => `Try to find the ball. Push the square to see if there is a ball underneath it. You have <span>${ num } attempts</span>.`,
	button:  "Show My Score",
	ball:    "ball",
	cross:   "cross",
	hidden:  "hidden",
};

export const RESULTS = {
	textOne: (name, result) => {
		return result
					 ? `Good job ${ name }!`
					 : `At least you tried ${ name }!`;
	},
	textTwo: result => `${ result } out of 3`,
	button:  "Start over",
};
