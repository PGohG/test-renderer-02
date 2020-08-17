import { get } from "lodash";
import React from "react";
import { tz } from "moment-timezone";
import "./demoStyles.css";

import {
	IMG_CERTIFICATE_SEAL_LOGO,
	fullWidthStyle,
	halfWidthStyle,
	threeqartWidthStyle,
	myriad12,
	myriad16,
	myriad28Bold,
	myriad20Cond,
	myriad28Cond
} from "./certStylesWSDip";

const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = inDate => {
  if (!inDate) return null;
  const outDate = new Date(inDate);
  return tz(outDate, TIMEZONE).format("D MMMM YYYY");
};

export const renderFullCertAwardTextWSDip = doc => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "20rem" }}
    >
      <span style={myriad16}>
      	This is to certify that
      </span>
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
    </div>{" "}

    <div className="row d-flex justify-content-center">
      <span style={myriad16}>and attained the prescribed standard was awarded the</span>
    </div>{" "}

    {renderCertDescrWSDip(doc)}
   </div>
);

export const renderCertDescrWSDip = doc => (
  <div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span>
            <p style={myriad28Bold}>{doc.description}</p>
          </span>
        </div>
      </div>{" "}
    </div>

    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!doc.description.includes(" in ") && !doc.description.includes("Certificate of Competency") && (
            <span>
              <p style={myriad28Bold}>in</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>

    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!doc.description.includes(" in ") && doc.description.includes("Certificate of Competency") && (
            <span>
              <p style={myriad28Bold}>for</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>

    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span>
            <p style={myriad28Bold}>
              {doc.additionalData.courseDescription}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>

    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span>
            <p style={myriad28Bold}>
              {doc.additionalData.courseSpecialisation}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>

    <div className="row d-flex justify-content-center">
      <span style={myriad16}>on</span>
    </div>{" "}

    <div className="row d-flex justify-content-center">
      <span style={myriad20Cond}>
        <p>
          {formatDateFullMonthProper(doc.graduationDate)}
        </p>
      </span>
    </div>

	<div> {!doc.additionalData.courseSpecialisation
	? <div className="row">
          <span style={myriad28Bold}>
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
        style={{ marginTop: "1rem", marginBottom: "10rem" }}
  >

  	<div className="col-1">
  	</div>

    <div className="col-4 justify-content-center">
      <div className="row justify-content-center align-items-center">
        <img style={halfWidthStyle} src={IMG_CERTIFICATE_SEAL_LOGO} alt="ITE Seal" />
      </div>
    </div>

	<div className="col-5 justify-content-center">
		<div className="signature-container" style={myriad12}>
			<img
				style={halfWidthStyle}
				src={doc.additionalData.certSignatories[0].signature}
				alt="Cert Sign1"
			/>

			<p>	{doc.additionalData.certSignatories[0].designation}	</p>

			<img
				style={halfWidthStyle}
				src={doc.additionalData.certSignatories[1].signature}
				alt="Cert Sign1"
			/>
			<p> {doc.additionalData.certSignatories[1].designation}	</p>
		</div>
	</div>

  	<div className="col-1">
  	</div>
  </div>
);

export const renderTwoSignaturesWSDipNoSeal = doc => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "10%", marginBottom: "10%" }}
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
