import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import "./styles.scss";

import Card from "../../components/card/card";

class Cards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: 0
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
		for (let i = 0; i < 3; i++) {
			setTimeout(() => {
				this.setState({ show: i + 1 });
			}, 750 * i);
		}
	}
}

Cards.propTypes = {};

const mapStateToProps = state => {
	return {
		cards: state.view.cards,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// setName: payload => dispatch(action.setName(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
