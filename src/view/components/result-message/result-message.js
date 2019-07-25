import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

import clapIcon from "../../../static/assets/clap.svg";

const resultMessage = props => {

	const className = ClassNames({
		"result-msg": true,
		"hide":       !props.show,
		"show":       props.show,
	});

	return (
		<div className = { className }>

			{/*icon*/ }
			<div className = "result-msg__icon">
				<img
					src = { clapIcon }
					alt = "Clap Icon"
				/>
			</div>

			{/*text*/ }
			<div className = "result-msg__text">
				{ props.text }
			</div>
		</div>
	);
};

resultMessage.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string
};

export default resultMessage;
