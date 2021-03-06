import PropTypes from "prop-types";
import React from "react";
import GradingSystem from "./gradingSystem";
import GradingSystem2 from "./gradingSystem2";

import {
	arial9PtL,
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

	<div> {doc.additionalData.transcriptData.career.includes("WORK-STUDY DIPLOMA")
	? <div className="row">
		<div className="col-8" style={arial9PtL}> <strong> Grading System: </strong> </div>
		<br />
		<br />
	  </div>
	: <div className="row">
		<div className="col-8" style={arial9PtL}> <strong> Module Grading System: </strong> </div>
		<br />
		<br />
	  </div>
	} </div>

	<div className="row" >
		<div className="col-3">
			<GradingSystem doc={doc} />
		</div>

		<div className="col-3">
			<GradingSystem2 doc={doc} />
		</div>

		<div className="col-1">
		</div>

		<div className="col-4">
			<div className="signature-container sign-underline">
			  <img
				style={fullWidthStyle}
				src={doc.additionalData.transcriptSignatories[0].signature}
				alt="Transcript Sign"
			  />
			</div>

			<div className="signature-container" style={arial11PtC}> <strong>
			  {doc.additionalData.transcriptSignatories[0].designation} </strong>
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
