import PropTypes from "prop-types";
import React from "react";

import { format } from "date-fns";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { PrintWatermark } from "./common/PrintWatermark";
import certificateBg from "./common/certificate_background.png";

import {
	renderFullCertAwardText,
	renderTwoSignatures,
	renderITEFooter
} from "../common/certDetailsWSDip";


const Template = ({ document }) => (
	<div>
	    <PrintWatermark />
	    <div
	      className="p-2 container"
	      style={{
			top: "0",
			width: "100%",
			height: "100%",
	        backgroundImage: `url('${certificateBg}')`,
	        backgroundPosition: "center",
	        backgroundSize: "cover",
	        border: "1px solid #324353"
	      }}
	    >
			<p>
			<br />
			<br />
			</p>

			{renderFullCertAwardText(document)}
			{renderTwoSignatures(document)}
			{renderITEFooter(document)}

		</div>
	</div>
);

Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
