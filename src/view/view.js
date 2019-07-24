import React, { Component } from "react";
import "./styles.scss";

import Logo  from "../static/assets/frank-icon.svg";
import Start from "./containers/start/start";

class View extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className = "view">

				{/*body*/ }
				<div className = "view__body">
					<Start />
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

export default View;
