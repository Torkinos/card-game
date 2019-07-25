import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../../actions";
import "./styles.scss";

import { GAME } from "../../../static/constants/constants";
import Mustache from "../../components/mustache/mustache";
import ChatBox  from "../../components/chat-box/chat-box";
import Sections from "../../components/sections/sections";
import Cards    from "../cards/cards";

const { chatOne, chatTwo, button } = GAME;

class Game extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show:       {
				chatOneShow: false,
				chatTwoShow: false,
				cardsShow:   false,
			},
			buttonShow: false
		};
	}

	render() {

		const { name, attempts } = this.props;

		const { chatOneShow, chatTwoShow, cardsShow } = this.state.show;

		const { buttonShow } = this.state;

		const cards = cardsShow
									? <Cards showBtn = { () => this.setState({ buttonShow: true }) } />
									: null;

		const messageOne = attempts > 2
											 ? (
												 <ChatBox
													 text = { chatOne(name) }
													 show = { chatOneShow }
												 />
											 )
											 : null;

		return (
			<div className = "game">
				<Sections
					btnText = { button }
					btnAnimate = { buttonShow }
				>

					{/*icon*/ }
					<Mustache show />

					{/*message one*/ }
					{ messageOne }

					{/*message two*/ }
					<ChatBox
						text = { chatTwo(attempts) }
						show = { chatTwoShow }
					/>

					{/*cards*/ }
					<div className = "game__cards">
						{ cards }
					</div>
				</Sections>
			</div>
		);
	}

	componentDidMount() {

		// loops components to show with fade animation
		Object.keys(this.state.show).forEach((key, index) => {
			setTimeout(() => {
				this.setState(prevState => {
					return {
						show: {
							...prevState.show,
							[key]: true
						}
					};
				});
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
