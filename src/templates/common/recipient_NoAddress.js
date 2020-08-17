import PropTypes from "prop-types";
import React from "react";

import {
	arial12PtL
} from "./certStyles";


const Recipient = ({ doc }) => (
  <div className="container" style={arial12PtL}>
	<style>
		{`
		.underline { border-bottom: 1px solid #212529; }
		`}
	</style>

    <div className="row">
      <div className="col-1"> NAME </div>
      <div className="col-6"> : &nbsp; {doc.recipient.name.toUpperCase()} </div>
	  <div className="col-4"> IDENTIFICATION NO. &nbsp; : &nbsp; {doc.recipient.studentId} </div>
    </div>

	<div className="row"> <br /> </div>

	<div> {doc.additionalData.transcriptData.graduationField.includes("DATE OF GRADUATION")
	? 	<div className="row">
		<div className="col-7">  </div>
		<div className="col-4"> {doc.additionalData.transcriptData.graduationField} : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
	  </div>
	: null
	} </div>

    <div className="row">
      <div className="col-3"> ACADEMIC CAREER </div>
      <div className="auto"> : </div>
      <div className="col-8"> {doc.additionalData.transcriptData.career} </div>
    </div>

    <div className="row">
      <div className="col-3"> PROGRAMME </div>
      <div className="auto"> : </div>
      <div className="col-8"> {doc.additionalData.transcriptData.programName} </div>
    </div>

   <div> {doc.additionalData.transcriptData.institutionField
	? <div className="row">
		  <div className="col-3"> {doc.additionalData.transcriptData.institutionField} </div>
		  <div className="auto"> : </div>
		  <div className="col-8"> {doc.additionalData.transcriptData.institution} </div>
	   </div>
	:  <div> {doc.additionalData.transcriptData.institution
		? <div className="row">
			  <div className="col-3"> </div>
		  	  <div className="auto"> &nbsp; </div>
			  <div className="col-8"> {doc.additionalData.transcriptData.institution} </div>
		   </div>
		: null
		} </div>
	} </div>

   <div> {doc.additionalData.transcriptData.graduationField.includes("PERIOD OF STUDY")
	? <div className="row">
		  <div className="col-3"> {doc.additionalData.transcriptData.graduationField} </div>
		  <div className="auto"> : </div>
		  <div className="col-8"> {doc.additionalData.transcriptData.graduationDates} </div>
	   </div>
	: null
	} </div>

    <div className="row">
		<div className="col-11">
			<div className="underline-container underline"> &nbsp; </div>
		</div>
    </div>
    <br />
  </div>

);

Recipient.propTypes = {
  doc: PropTypes.object.isRequired
};

export default Recipient;
