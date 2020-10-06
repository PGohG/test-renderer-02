import PropTypes from "prop-types";
import React from "react";

import { format } from "date-fns";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import certificateBg from "./common/certificate_background.png";

import {
	renderFullCertAwardTextWSDip,
	renderTwoSignaturesWSDip
} from "./common/certDetailsWSDip";

const bgStyle = {
	width: "100%",
	height: "auto",
	backgroundImage: `url('${certificateBg}')`,
	backgroundPosition: "top",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	overflow: "hidden"
};

const textStyle = {
	width: "100%",
	minHeight: "1160px",
	padding: "22rem 12rem 1rem",
	overflow: "hidden"
};

const signStyle = {
	width: "100%",
	height: "auto",
	padding: "1rem 10rem 10rem",
	whiteSpace: "nowrap",
	overflow: "hidden"
};

const Template = ({ document }) => (
 	<div className="container" style={bgStyle}>
		<div style={textStyle}>
			{renderFullCertAwardTextWSDip(document)}
		</div>

		<div style={signStyle}>
			{renderTwoSignaturesWSDip(document)}
		</div>
	</div>
);


Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
