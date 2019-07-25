import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

import { RESULTS }    from "../../../static/constants/constants";
import clapIcon       from "../../../static/assets/clap.svg";
import sunglassesIcon from "../../../static/assets/sunglasses-smile.svg";

const { betterLuck, nicely, good, great } = RESULTS;

const resultMessage = props => {

	const className = ClassNames({
		"result-msg": true,
		"hide":       !props.show,
		"show":       props.show,
	});

	let text = null,
			icon = clapIcon;

	switch (props.points) {
		case 0:
			text = betterLuck(props.name);
			icon = sunglassesIcon;
			break;
		case 1:
			text = nicely(props.name);
			break;
		case 2:
			text = good(props.name);
			break;
		case 3:
			text = great(props.name);
			break;
		default:
			break;
	}

	return (
		<div className = { className }>

			{/*icon*/ }
			<div className = "result-msg__icon">
				<img
					src = { icon }
					alt = "Clap Icon"
				/>
			</div>

			{/*text*/ }
			<div className = "result-msg__text">
				{ text }
			</div>
		</div>
	);
};

resultMessage.propTypes = {
	show:   PropTypes.bool,
	points: PropTypes.number,
	name:   PropTypes.string,
};

export default resultMessage;
