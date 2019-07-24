import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

const sections = props => {

	const buttonClass = ClassNames({
		"sections__button":           true,
		"sections__button--disabled": props.btnDisabled
	});

	const button = props.btnText
								 ? (
									 <div className = { buttonClass }>
										 { props.btnText }
									 </div>
								 )
								 : null;

	return (
		<div className = "sections">

			{/*top*/ }
			<div className = "sections__top">
				{ props.children }
			</div>

			{/*bot*/ }
			<div className = "sections__bot">

				{ button }
			</div>
		</div>
	);
};

sections.propTypes = {
	btnDisabled: PropTypes.bool,
	btnText:     PropTypes.string
};

export default sections;
