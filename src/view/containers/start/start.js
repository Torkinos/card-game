import React, { Component } from "react";
import "./styles.scss";

import Sections from "../../components/sections/sections";
import Mustache from "../../components/mustache/mustache";

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className = "start">
				<Sections>

					<Mustache />
				</Sections>
			</div>
		);
	}
}

export default Start;
