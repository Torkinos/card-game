import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

import { GAME }  from "../../../static/constants/constants";
import ballIcon  from "../../../static/assets/blue-circle.svg";
import crossIcon from "../../../static/assets/red-cross.svg";

const { ball, cross, hidden } = GAME;

const card = props => {

	let image = null;

	// add grey color if hidden
	const className = ClassNames({
		"card":         true,
		"card--hidden": props.type === hidden,
		"hide":         !props.show,
		"show":         props.show,
	});

	// if not hidden add image
	if (props.type !== hidden) {

		let src      = "",
				imgClass = "card__image";

		// if correct show ball
		if (props.type === ball) {
			src = ballIcon;
			imgClass += " card__image--ball";
		}

		// if incorrect show cross
		if (props.type === cross) {
			src = crossIcon;
			imgClass += " card__image--cross";
		}

		// return image
		image = (
			<img
				className = { imgClass }
				src = { src }
				alt = { props.type }
			/>
		);
	}

	return (
		<div
			className = { className }
			//
			onClick = { props.choseCard }
		>
			{ image }
		</div>
	);
};

card.propTypes = {
	show:      PropTypes.bool,
	type:      PropTypes.string,
	choseCard: PropTypes.func
};

export default card;
