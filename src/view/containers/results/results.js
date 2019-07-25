import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../../actions";
import "./styles.scss";

import { RESULTS }   from "../../../static/constants/constants";
import Sections      from "../../components/sections/sections";
import ResultMessage from "../../components/result-message/result-message";

const { textOne, textTwo, button } = RESULTS;

class Results extends Component {

	constructor(props) {
		super(props);
		this.state = {
			textOneShow: false,
			textTwoShow: false,
			buttonShow:  false,
		};
	}

	render() {

		const { textOneShow, textTwoShow, buttonShow } = this.state;

		const { name, points } = this.props;

		return (
			<div className = "results">
				<Sections
					btnText = { button }
					btnAnimate = { buttonShow }
				>
					<div className = "results__container">

						{/*cheering*/ }
						<ResultMessage
							show = { textOneShow }
							// show message according points
							text = { textOne(name, points > 0) }
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

Results.propTypes = {
	points: PropTypes.number,
	name:   PropTypes.string,
};

const mapStateToProps = state => {
	return {
		name:   state.view.name,
		points: state.view.points,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// results: () => dispatch(action.results()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
