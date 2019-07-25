import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../../actions";
import "./styles.scss";

import { RESULTS }   from "../../../static/constants/constants";
import Sections      from "../../components/sections/sections";
import ResultMessage from "../../components/result-message/result-message";
import Points        from "../../components/points/points";

const { textTwo, button } = RESULTS;

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

		const { name, points, start } = this.props;

		return (
			<div className = "results">
				<Sections
					btnText = { button }
					btnAnimate = { buttonShow }
					//
					onClick = { start }
				>
					<div className = "results__container">

						{/*Result Message*/ }
						<ResultMessage
							show = { textOneShow }
							// show message according points
							name = { name }
							points = { points }
						/>

						{/*Overall Points*/ }
						<Points
							show = { textTwoShow }
							text = { textTwo(points) }
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
			}, 375 * (index * 2));
		});
	}
}

Results.propTypes = {
	points: PropTypes.number,
	name:   PropTypes.string,
	start:  PropTypes.func,
};

const mapStateToProps = state => {
	return {
		name:   state.view.name,
		points: state.view.points,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		start: () => dispatch(action.start()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
