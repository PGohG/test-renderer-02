import PropTypes from "prop-types";
import React from "react";
import SubjectGrades from "./subjectGrades";

import {
	arial12PtL,
	arial12PtR,
	arial12PtC
} from "./certStyles";

const ExamResults = ({ doc }) => (
	<div className="container" style={arial12PtL}>
		<div className="row">
			<div className="col-2" style={arial12PtL}><strong>MODULE CODE</strong></div>
			<div className="col-5" style={arial12PtL}><strong>MODULE TITLE</strong></div>
			<div className="col-2 credit-unit" style={arial12PtR}><strong> CREDIT EARNED</strong></div>
			<div className="col-2 grade" style={arial12PtC}><strong>GRADE</strong>
				<br />
				<br />
			</div>
		</div>

		<SubjectGrades doc={doc} />
		<br />

		<div className="row">
			<div className="col-11"> <strong> GRADE POINT AVERAGE &nbsp;  : &nbsp; &nbsp; {doc.cumulativeScore.toFixed(3)}</strong>
				<br />
				<br />
			</div>
		</div>

		<div className="row">
		  <div className="col-2"> <strong> RESULT &nbsp; :</strong></div>
		  <div className="col-9"> <strong> {doc.additionalData.transcriptData.resultStatement}</strong>
			  <br />
			  <br />
		  </div>
 	    </div>

 	   <div> {doc.additionalData.transcriptData.awardStatement
		? <div className="row">
			  <div className="col-2"> <strong> AWARD &nbsp; : </strong> </div>
			  <div className="col-9"> <strong> {doc.additionalData.transcriptData.awardStatement} </strong> </div>
			  <br />
			  <br />
		   </div>
		: null
		} </div>

	   <div> {doc.additionalData.transcriptData.napfaField
		? <div className="row">
			  <div className="col-11"> <strong> {doc.additionalData.transcriptData.napfaField} &nbsp; : &nbsp; &nbsp; {doc.additionalData.transcriptData.napfaStatement} </strong> </div>
			  <br />
			  <br />
		   </div>
		: null
		} </div>

	   <div> {doc.additionalData.transcriptData.ccaGrade
		? <div className="row">
			  <div className="col-4"> <strong> CO-CURRICULAR ACTIVITIES GRADE </strong> </div>
			  <div className="col-7"> <strong> : &nbsp; &nbsp; {doc.additionalData.transcriptData.ccaGrade} </strong> </div>
		   </div>
		: null
		} </div>

	   <div> {doc.additionalData.transcriptData.ccaAdvantage
		? <div className="row">
			  <div className="col-4"> &nbsp; </div>
			  <div className="col-7"> <strong> &nbsp; &nbsp; &nbsp; {doc.additionalData.transcriptData.ccaAdvantage} </strong> </div>
		   </div>
		: null
		} </div>

		<br />
		<br />
	  </div>
);

ExamResults.propTypes = {
  doc: PropTypes.object.isRequired
};

export default ExamResults;
