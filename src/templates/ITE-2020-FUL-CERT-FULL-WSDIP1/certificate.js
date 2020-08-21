import PropTypes from "prop-types";
import React from "react";

import { format } from "date-fns";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { PrintWatermark } from "./common/PrintWatermark";
import certificateBg from "./common/certificate_background.png";

import {
	renderFullCertAwardTextWSDip,
	renderTwoSignaturesWSDip
} from "./common/certDetailsWSDip";

const bgStyle = {
	width: "100%",
	height: "auto",
	border: "1px solid gray",
	backgroundImage: `url('${certificateBg}')`,
	backgroundPosition: "top",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat"
};

const Template = ({ document }) => (
 	<div size="A4" className="container" style={bgStyle}>
		{renderFullCertAwardTextWSDip(document)}
		{renderTwoSignaturesWSDip(document)}
	</div>
);

Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
