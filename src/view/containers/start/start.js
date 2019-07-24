import React, { Component } from "react";
import "./styles.scss";

import Sections from "../../components/sections/sections";

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className = "start">
				<Sections>

				</Sections>
			</div>
		);
	}
}

export default Start;
