import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import "./styles.scss";

import routes   from "../routes/routes";
import Logo     from "../static/assets/frank-icon.svg";
import Mustache from "./components/mustache/mustache";
import Start    from "./containers/start/start";
import Game     from "./containers/game/game";
import Results  from "./containers/results/results";

const pages = {
	[routes.start]:   <Start />,
	[routes.game]:    <Game />,
	[routes.results]: <Results />,
};

class View extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mustacheShow: false
		};
	}

	render() {

		const { mustacheShow } = this.state;

		const { activePage } = this.props;

		const page = mustacheShow
								 ? pages[activePage]
								 : null;

		const mustache = activePage !== routes.results
										 ? <Mustache show = { mustacheShow } />
										 : null;

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
							src = { Logo }
							alt = "Logo"
						/>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ mustacheShow: true });
		}, 250);
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
