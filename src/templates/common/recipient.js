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
      <div className="col-2"> NAME </div>
      <div className="col-5"> : &nbsp; {doc.recipient.name.toUpperCase()} </div>
	  <div className="col-4"> IDENTIFICATION NO. &nbsp; : &nbsp; {doc.recipient.studentId} </div>
    </div>

	<div> {doc.additionalData.transcriptData.addressLine1
	? <div className="row">
		  <div className="col-2"> ADDRESS </div>
		  <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.addressLine1} </div>
	   </div>
	: null
	} </div>

	<div> {doc.additionalData.transcriptData.addressLine2
	? <div> {doc.additionalData.transcriptData.addressLine3
		? <div className="row">
			 <div className="col-2">  </div>
			 <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine2} </div>
		  </div>
		: <div> {doc.additionalData.transcriptData.graduationField.includes("DATE OF GRADUATION")
			? <div className="row">
			  	<div className="col-2">  </div>
				<div className="col-5"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine2} </div>
				<div className="col-4"> {doc.additionalData.transcriptData.graduationField} : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
			  </div>
			: <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine2} </div>
			   </div>
			} </div>
		} </div>
	: null
	} </div>

	<div> {doc.additionalData.transcriptData.addressLine3
	? <div> {doc.additionalData.transcriptData.addressLine4
		? <div> {doc.additionalData.transcriptData.graduationField.includes("DATE OF GRADUATION")
			? <div> <div className="row">
			  	<div className="col-2">  </div>
			  	<div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
			  </div>

			  <div className="row">
			  	<div className="col-2">  </div>
				<div className="col-5"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine4} </div>
				<div className="col-4"> {doc.additionalData.transcriptData.graduationField} : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
			  </div>
			  </div>
			: <div> <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
			   </div>

			   <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine4} </div>
			   </div>
			   </div>
			} </div>
		: <div> {doc.additionalData.transcriptData.graduationField.includes("DATE OF GRADUATION")
			? <div className="row">
			  	<div className="col-2">  </div>
				<div className="col-5"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
				<div className="col-4"> {doc.additionalData.transcriptData.graduationField} : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
			  </div>
			: <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
			   </div>
			} </div>
		} </div>
	: <div> {doc.additionalData.transcriptData.addressLine4
		? <div> {doc.additionalData.transcriptData.graduationField.includes("DATE OF GRADUATION")
			? <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-5"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine4} </div>
				  <div className="col-4"> {doc.additionalData.transcriptData.graduationField} : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
			   </div>
			: <div className="row">
				  <div className="col-2">  </div>
				  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
			   </div>
			} </div>
		: null
		} </div>
	} </div>

	<div className="row"> <br /> </div>

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
