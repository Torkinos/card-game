import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

import TextField from "@material-ui/core/TextField";

const Input = props => {

	const className = ClassNames({
		"input": true,
		"hide":  !props.show,
		"show":  props.show,
	});

	return (
		<div className = { className }>
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
	show:   PropTypes.bool,
	label:  PropTypes.string,
	value:  PropTypes.string,
	change: PropTypes.func
};

export default Input;
