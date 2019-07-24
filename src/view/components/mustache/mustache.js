import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

import mustacheIcon from "../../../static/assets/frank-mustace.svg";

const mustache = props => {

	const className = ClassNames({
		"mustache": true,
		"hide":     !props.show,
		"show":     props.show,
	});

	return (
		<div className = { className }>
			<img
				src = { mustacheIcon }
				alt = "Mustache Icon"
			/>
		</div>
	);
};

mustache.propTypes = {
	show: PropTypes.bool
};

export default mustache;
