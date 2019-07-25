import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import "./styles.scss";

import { GAME }    from "../../../static/constants/constants";
import Mustache    from "../../components/mustache/mustache";
import ChatBox     from "../../components/chat-box/chat-box";
import smileIcon   from "../../../static/assets/smile.svg";
import Sections    from "../../components/sections/sections";
import * as action from "../../actions";

const { chatOne, chatTwo, button } = GAME;

class Game extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chatOneShow: false,
			chatTwoShow: false,
		};
	}

	render() {

		const { name, attempts } = this.props;

		const { chatOneShow, chatTwoShow } = this.state;

		const btnAnimate = attempts < 1;

		return (
			<div className = "game">
				<Sections
					btnText = { button }
					btnAnimate = { btnAnimate }
				>

					{/*icon*/ }
					<Mustache show />

					{/*message one*/ }
					<ChatBox
						text = { chatOne(name) }
						show = { chatOneShow }
					/>

					{/*message two*/ }
					<ChatBox
						text = { chatTwo(attempts) }
						show = { chatTwoShow }
					/>
				</Sections>
			</div>
		);
	}

	componentDidMount() {

		// loops components to show with fade animation
		Object.keys(this.state).forEach((key, index) => {
			setTimeout(() => {
				this.setState({ [key]: true });
			}, 1000 * (index + 1));
		});
	}
}

Game.propTypes = {
	name:     PropTypes.string,
	attempts: PropTypes.number,
};

const mapStateToProps = state => {
	return {
		name:     state.view.name,
		attempts: state.view.attempts,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// setName: payload => dispatch(action.setName(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
