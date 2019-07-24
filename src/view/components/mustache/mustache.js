import React     from "react";
import PropTypes from "prop-types";
import "./styles.scss";

import mustacheIcon from "../../../static/assets/frank-mustace.svg";

const mustache = props => {
	return (
		<div className = "mustache">
			<img
				src = { mustacheIcon }
				alt = "Mustache Icon"
			/>
		</div>
	);
};

mustache.propTypes = {};

export default mustache;
