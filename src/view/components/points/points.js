import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

const points = props => {

	const className = ClassNames({
		"points": true,
		"hide":   !props.show,
		"show":   props.show,
	});

	return (
		<div className = { className }>
			{ props.text }
		</div>
	);
};

points.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string
};

export default points;
