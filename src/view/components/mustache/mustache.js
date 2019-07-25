import React, { useState, useEffect } from "react";
import ClassNames                     from "classnames";
import "./styles.scss";

import mustacheIcon from "../../../static/assets/frank-mustace.svg";

const Mustache = props => {

	const [show, setShow] = useState(0);

	useEffect(() => {
		setShow(true);
	}, []);

	const className = ClassNames({
		"mustache": true,
		"hide":     !show,
		"show":     show,
	});

	return (
		<div className = { className }>
			<img
				src = { mustacheIcon }
				alt = "Mustache Icon"
			/>
		</div>
	);
};

export default Mustache;
