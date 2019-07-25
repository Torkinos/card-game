import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../../actions";
import "./styles.scss";

import Card from "../../components/card/card";

class Cards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show:     0,
			disabled: true,
		};
	}

	render() {

		const { show } = this.state;

		const { cards } = this.props;

		const list = cards.map((item, index) => {
			return (
				<div
					className = "cards__item"
					key = { index }
				>
					<Card
						show = { show > index }
						type = { item.type }
						//
						choseCard = { () => this.choseCard(index) }
					/>
				</div>
			);
		});

		return (
			<div className = "cards">
				{ list }
			</div>
		);
	}

	componentDidMount() {
		this.animateCards();
	}

	// show cards one by one, enable click after animation ends
	animateCards = () => {
		for (let i = 0; i < 3; i++) {
			setTimeout(() => {
				this.setState({
					show:     i + 1,
					disabled: i < 2
				});
			}, 500 * i);
		}
	};

	// click event on card
	choseCard = index => {
		if (!this.state.disabled) {
			this.props.choseCard(index);

			// disable clicking
			this.setState({ disabled: true });

			// clear cards
			setTimeout(() => {
				this.props.clearCards();

				// enable clicking if attempts left
				this.props.attempts < 1
				? this.lastAttempt()
				: this.setState({ disabled: false });
			}, 1500);
		}
	};

	// disable click and show button
	lastAttempt = () => {
		this.setState({ disabled: true });

		setTimeout(() => {
			this.props.showBtn();
		}, 500);
	};
}

Cards.propTypes = {
	attempts:   PropTypes.number,
	cards:      PropTypes.array,
	clearCards: PropTypes.func,
	showBtn:    PropTypes.func,
};

const mapStateToProps = state => {
	return {
		cards:    state.view.cards,
		attempts: state.view.attempts,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		choseCard:  payload => dispatch(action.choseCard(payload)),
		clearCards: () => dispatch(action.clearCards()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
