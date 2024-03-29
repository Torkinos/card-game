import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

const sections = props => {

	const buttonClass = ClassNames({
		"sections__button":           true,
		"sections__button--disabled": props.btnDisabled,
		"hide":                       !props.btnAnimate,
		"show":                       props.btnAnimate,
	});

	const button = props.btnText
								 ? (
									 <div
										 className = { buttonClass }
										 //
										 onClick = { props.onClick }
									 >
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
	btnAnimate:  PropTypes.bool,
	btnDisabled: PropTypes.bool,
	btnText:     PropTypes.string,
	onClick:     PropTypes.func
};

export default sections;
