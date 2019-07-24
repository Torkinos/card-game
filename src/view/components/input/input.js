import React     from "react";
import PropTypes from "prop-types";
import "./styles.scss";

import TextField from "@material-ui/core/TextField";

const Input = props => {
	return (
		<div className = "input">
			<TextField
				label = { props.label }
				value = { props.value }
				fullWidth

				onChange = { e => props.change(e.target.value) }
			/>
		</div>
	);
};

Input.propTypes = {
	label:  PropTypes.string,
	value:  PropTypes.string,
	change: PropTypes.func
};

export default Input;
