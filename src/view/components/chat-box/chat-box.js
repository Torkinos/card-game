import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./styles.scss";

const chatBox = props => {

	const InnerClassName = ClassNames({
		"chat-box__inner": true,
		"hide":            !props.show,
		"show":            props.show,
	});

	return (
		<div className = "chat-box">
			<div className = { InnerClassName }>
				<div dangerouslySetInnerHTML = { { __html: props.text } } />

				{ props.children }
			</div>
		</div>
	);
};

chatBox.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string,
};

export default chatBox;
