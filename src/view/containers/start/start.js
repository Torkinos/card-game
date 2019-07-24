import React, { Component } from "react";
import "./styles.scss";

import { START } from "../../../static/constants/constants";
import smileIcon from "../../../static/assets/smile.svg";
import Sections  from "../../components/sections/sections";
import Mustache  from "../../components/mustache/mustache";
import ChatBox   from "../../components/chat-box/chat-box";

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const { chatOne, chatTwo } = START;

		return (
			<div className = "start">
				<Sections>

					<Mustache />

					<ChatBox text = { chatOne }>
						<img
							className = "start__smile"
							src = { smileIcon }
							alt = "smile"
						/>
					</ChatBox>

					<ChatBox text = { chatTwo } />
				</Sections>
			</div>
		);
	}
}

export default Start;
