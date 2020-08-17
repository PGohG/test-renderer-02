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
	overflow: "hidden",
	backgroundImage: `url('${certificateBg}')`,
	backgroundPosition: "top",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat"
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

const Template = ({ document }) => {

	// 794px is width of A4 portrait (21cm)
	const ratio = (window.innerWidth - 30) / 794;

	const scale =
	ratio < 1
	  ? {
		  transform: `scale(${ratio}, ${ratio})`,
		  transformOrigin: "top left"
		}
	  : null;

  const html = (
	<div className="container">
		<div style={bgStyle}>
			<div style={textStyle}>
				{renderFullCertAwardTextWSDip(document)}
			</div>

			<div style={signStyle}>
				{renderTwoSignaturesWSDip(document)}
			</div>
		</div>
	</div>
  );
  return html;
};

Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
