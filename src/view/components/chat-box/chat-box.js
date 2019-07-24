import React     from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const chatBox = props => {
	return (
		<div className = "chat-box">
			<div className = "chat-box__inner">
				<div dangerouslySetInnerHTML = { { __html: props.text } } />

				{ props.children }
			</div>
		</div>
	);
};

chatBox.propTypes = {
	text: PropTypes.string,
};

export default chatBox;
