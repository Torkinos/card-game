import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import "./styles.scss";

import routes from "../routes/routes";
import Logo   from "../static/assets/frank-icon.svg";
import Start  from "./containers/start/start";
import Game   from "./containers/game/game";

const pages = {
	[routes.start]: <Start />,
	[routes.game]:  <Game />,
};

class View extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const { activePage } = this.props;

		return (
			<div className = "view">

				{/*body*/ }
				<div className = "view__body">
					{ pages[activePage] }
				</div>

				{/*footer*/ }
				<div className = "view__footer">

					{/*logo*/ }
					<div className = "view__logo">
						<img
							src = { Logo }
							alt = "Logo"
						/>
					</div>
				</div>
			</div>
		);
	}
}

View.propTypes = {
	activePage: PropTypes.string
};

const mapStateToProps = state => {
	return {
		activePage: state.view.activePage,
	};
};

export default connect(mapStateToProps)(View);
