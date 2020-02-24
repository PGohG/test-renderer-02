import PropTypes from "prop-types";
import React from "react";
import GradingSystem from "./gradingSystem";

import {
	arial11PtC
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const TranscriptFooter = ({ doc }) => (

	<div className="container">
     <style>
       {`
       .sign-underline { border-bottom: 2px solid #212529; }
       `}
     </style>

    <br />
    <br />

	<div className="row">
		<div className="col-4">
			<GradingSystem doc={doc} />
		</div>

		<div className="col-3">
		    <br />
		</div>

		<div className="col-4">
			<br />
			<br />
			<div className="signature-container sign-underline">
			  <img
				style={fullWidthStyle}
				src={doc.additionalData.transcriptSignatories[0].signature}
				alt="Transcript Sign"
			  />
			</div>

			<div className="signature-container" style={arial11PtC}> <strong>
			  {doc.additionalData.transcriptSignatories[0].designation} </strong>
			   <br />
			   <br />
			  {doc.additionalData.transcriptData.effectiveDate}
			</div>
		</div>
		<br />
	</div>

	<br />

  </div>
);

TranscriptFooter.propTypes = {
  doc: PropTypes.object.isRequired
};

export default TranscriptFooter;
