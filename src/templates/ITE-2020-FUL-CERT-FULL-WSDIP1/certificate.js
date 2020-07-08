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


const Template = ({ document }) => (
  <>
    <PrintWatermark />
    <div
	  className="container"
	  style={{
		backgroundImage: `url('${certificateBg}')`,
		backgroundPosition: "top",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		border: "1px solid #324353"
	  }}
	>
		{renderFullCertAwardTextWSDip(document)}
		{renderTwoSignaturesWSDip(document)}
	</div>
  </>
);

Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
