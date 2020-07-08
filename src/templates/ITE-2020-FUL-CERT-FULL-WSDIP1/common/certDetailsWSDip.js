import { get } from "lodash";
import React from "react";
import { tz } from "moment-timezone";
import "./demoStyles.css";

import {
	fullWidthStyle,
	halfWidthStyle,
	threeqartWidthStyle,
	arial16Pt,
	arial10Pt,
	arial5Pt,
	arial5PtR,
	timesNewRoman24Pt,
	timesNewRoman32Pt,
	myriad12,
	myriad16,
	myriad28Cond,
	myriad32Cond,
	myriad32Bold,
	COMTextStyle
} from "./certStylesWSDip";


const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = inDate => {
  if (!inDate) return null;
  const outDate = new Date(inDate);
  return tz(outDate, TIMEZONE).format("D MMMM YYYY");
};

export const renderLogoITE = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-1" />
    <div className="col-10">
      <img style={halfWidthStyle} src={IMG_CERT_FULL1_LOGO_ITE} alt="ITE Logo" />
    </div>
    <div className="col-1" />
  </div>
);

export const renderFullCertAwardTextWSDip = doc => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "15rem" }}
    >
      <span style={myriad16}>This is to certify that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={myriad28Cond}>{doc.recipient.name}</span>
        </div>
      </div>{" "}
    </div>

    <div className="row d-flex justify-content-center">
      <span style={myriad16}>
        having successfully completed the programme of study
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={myriad16}>and attained the prescribed standard was awarded the</span>
    </div>

    {renderCertDescrWSDip(doc)}
   </div>
);

export const renderCertDescrWSDip = doc => (
  <div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={myriad32Bold}>
            <p style={myriad32Bold}>{doc.description}</p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!doc.description.includes(" in ") && !doc.description.includes("Certificate of Competency") && (
            <span style={myriad32Bold}>
              <p style={myriad32Bold}>in</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!doc.description.includes(" in ") && doc.description.includes("Certificate of Competency") && (
            <span style={myriad32Bold}>
              <p style={myriad32Bold}>for</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={myriad32Bold}>
            <p>
              {doc.additionalData.courseDescription}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={myriad32Bold}>
            <p>
              {doc.additionalData.courseSpecialisation}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={myriad16}>on</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={myriad16}>
        <p>
          {formatDateFullMonthProper(doc.graduationDate)}
        </p>
      </span>
    </div>

	<div> {!doc.additionalData.courseSpecialisation
	? <div className="row">
          <span style={myriad32Bold}>
          	<br />
          </span>
	   </div>
	: null
	} </div>

  </div>
);


export const renderTwoSignaturesWSDip = doc => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "8rem", marginBottom: "4rem" }}
  >

	<div className="col-5">
	</div>

	<div className="col-4">
		<div className="signature-container" style={myriad12}>
		 	<img
				style={fullWidthStyle}
				src={doc.additionalData.certSignatories[0].signature}
				alt="Cert Sign1"
		  	/>
			<strong> {doc.additionalData.certSignatories[0].designation} </strong>
		   <br />
		   <br />

		 	<img
				style={fullWidthStyle}
				src={doc.additionalData.certSignatories[1].signature}
				alt="Cert Sign1"
		  	/>
			<strong> {doc.additionalData.certSignatories[1].designation} </strong>
		</div>
	</div>
  </div>
);

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
export default () => ({ doc }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
		{renderFullCertAwardTextWSDip(doc)}
		{renderTwoSignaturesWSDip(doc)}
   </div>
  </div>
);
