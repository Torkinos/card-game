import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../../actions";
import "./styles.scss";

import { START } from "../../../static/constants/constants";
import smileIcon from "../../../static/assets/smile.svg";
import Sections  from "../../components/sections/sections";
import Mustache  from "../../components/mustache/mustache";
import ChatBox   from "../../components/chat-box/chat-box";
import Input     from "../../components/input/input";

const { chatOne, chatTwo, inputLabel, button } = START;

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// set true to show with fade animation
			chatOneShow: false,
			chatTwoShow: false,
			inputShow:   false, // input and button
		};
	}

	render() {

		const { name, setName, game } = this.props;

		const { chatOneShow, chatTwoShow, inputShow } = this.state;

		return (
			<div className = "start">
				<Sections
					btnText = { button }
					btnDisabled = { name.length === 0 }
					btnAnimate = { inputShow }

					onClick = { game }
				>

					{/*message one*/ }
					<ChatBox
						text = { chatOne }
						show = { chatOneShow }
					>
						<img
							className = "start__smile"
							src = { smileIcon }
							alt = "smile"
						/>
					</ChatBox>

					{/*message two*/ }
					<ChatBox
						text = { chatTwo }
						show = { chatTwoShow }
					/>

					{/*input*/ }
					<div className = "start__input">
						<Input
							value = { name }
							label = { inputLabel }
							show = { inputShow }

							change = { val => setName(val) }
						/>
					</div>
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

Start.propTypes = {
	name:    PropTypes.string,
	setName: PropTypes.func,
	game:    PropTypes.func,
};

const mapStateToProps = state => {
	return {
		name: state.view.name,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setName: payload => dispatch(action.setName(payload)),
		game:    () => dispatch(action.game()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
