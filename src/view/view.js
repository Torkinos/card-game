import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import "./styles.scss";

import routes      from "../routes/routes";
import logo        from "../static/assets/frank-icon.svg";
import loadingIcon from "../static/assets/loading-circle.svg";
import Mustache    from "./components/mustache/mustache";
import Start       from "./containers/start/start";
import Game        from "./containers/game/game";
import Results     from "./containers/results/results";

const pages = {
	[routes.start]:   <Start />,
	[routes.game]:    <Game />,
	[routes.results]: <Results />,
};

class View extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const { activePage, loading } = this.props;

		const mustache = activePage !== routes.results && !loading
										 ? <Mustache />
										 : null;

		const loadingEl = (
			<div className = "view__loading">
				<img
					src = { loadingIcon }
					alt = "Loading"
				/>
			</div>
		);

		const page = loading
								 ? loadingEl
								 : pages[activePage];

		return (
			<div className = "view">

				{/*header*/ }
				<div className = "view__header">
					{ mustache }
				</div>

				{/*body*/ }
				<div className = "view__body">
					{ page }
				</div>

				{/*footer*/ }
				<div className = "view__footer">

					{/*logo*/ }
					<div className = "view__logo">
						<img
							src = { logo }
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
		loading:    state.view.loading,
	};
};

export default connect(mapStateToProps)(View);
