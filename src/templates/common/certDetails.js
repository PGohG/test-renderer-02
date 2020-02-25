import { get } from "lodash";
import React from "react";
import { tz } from "moment-timezone";

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
	COMTextStyle
} from "./certStyles";

import {
  IMG_CERT_FULL1_LOGO_ITE,
  IMG_CERT_NIEC1_LOGO_ITE,
  IMG_CERT_NIEC1ITE_LOGO_ITE,
  IMG_CERTIFICATE_SEAL,
} from "./images";

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


export const renderFullCertAwardText = doc => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "10rem" }}
    >
      <span style={arial16Pt}>It is hereby certified that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>{doc.recipient.name}</span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial10Pt}>
        __________________________________________________________________________________________
      </span>
    </div>
    <p>
      <br />
    </p>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>
        having successfully completed the programme of study
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>and passed the prescribed examinations</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>was awarded the</span>
    </div>

    {renderCertDescr(doc)}
   </div>
);

export const renderCertDescr = doc => (
  <div>
    <p>
      <br />
    </p>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>{doc.description}</p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!doc.description.includes(" in ") && (
            <span style={timesNewRoman32Pt}>
              <p style={timesNewRoman32Pt}>in</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {doc.additionalData.courseDescription}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {doc.additionalData.courseSpecialisation}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>on</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={timesNewRoman32Pt}>
        <p style={timesNewRoman32Pt}>
          {formatDateFullMonthProper(doc.graduationDate)}
        </p>
      </span>
    </div>
  </div>
);

export const renderTwoSignatures = doc => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "8rem", marginBottom: "1rem" }}
  >
    <div className="col-4 justify-content-center">
      <div className="row justify-content-center align-items-center">
        <img style={threeqartWidthStyle} src={IMG_CERTIFICATE_SEAL} alt="ITE Seal" />
      </div>
    </div>

    {renderSignatory(doc, 0, "", "", "")}
    {renderSignatory(doc, 1, doc.id, "/", doc.recipient.studentId
    )}
  </div>
);

export const renderSignatory = (doc, count, certnbr, separ, stdid) => (
  <div
    className="col-4 justify-content-center"
    style={{ marginTop: "4rem", marginBottom: "0" }}
  >
    <div className="px-4">
      <img style={fullWidthStyle} src={get(doc, `additionalData.certSignatories[${count}].signature`)} alt="Cert Sign" />
    </div>
    <div className="text-center">
      <strong>
        <p style={arial10Pt}>
          {get(doc, `additionalData.certSignatories[${count}].designation`)}
        </p>
      </strong>
    </div>
    <p>
      <br />
    </p>
    <div className="text-center">
      <strong>
        <p style={timesNewRoman24Pt}>
          {certnbr}
          {separ}
          {stdid}
        </p>
      </strong>
    </div>
  </div>
);

export const renderITEFooter = doc => (
  <div className="container">

	<div> {doc.additionalData.footnoteLine1
	? <div
      className="row d-flex justify-content-start align-items-start"
      style={{ marginTop: "1rem" }}
    >
		<div> {doc.additionalData.footnoteLine1.includes("Note: ")
			? <div className="row">
			  <div className="col-1" />
			  <div className="col-1">
				<p style={arial5PtR}> Note: </p>
			  </div>
			  <div className="col-9 text-left">
				<p style={arial5Pt}>{doc.additionalData.footnoteLine1.slice(6)} {doc.additionalData.footnoteLine2}</p>
			  </div>
			</div>
			: <div className="row">
			  <div className="col-1" />
			  <div className="col-10 text-left">
				<p style={arial5Pt}>{doc.additionalData.footnoteLine1}</p>
				<div className="ml-3">
				  <div className="pl-4">
					<p style={arial5Pt}>{doc.additionalData.footnoteLine2}</p>
				  </div>
				</div>
			  </div>
			</div>
    	} </div>
    </div>

	: null
	} </div>
	<br />
  </div>
);

export const renderCOM = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "6rem" }}
  >
    <p style={COMTextStyle}>Certificate of Merit</p>
  </div>
);

export const renderCOMAwardText = doc => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "2rem" }}
    >
      <span style={arial16Pt}>It is hereby certified that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>{doc.recipient.name}</span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial10Pt}>
        __________________________________________________________________________________________
      </span>
    </div>
    <p>
      <br />
    </p>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>was awarded the Certificate of Merit</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>for Outstanding Performance in the</span>
    </div>

    {renderCertDescr(doc)}
  </div>
);

export const renderLogoITEandPartner = () => (
  <div
    className="row d-flex justify-content-start align-items-end"
    style={{ marginTop: "3rem" }}
  >
    <div className="col-1" />
    <div className="col-5">
      <img style={fullWidthStyle} src={IMG_CERT_NIEC1_LOGO_ITE} alt="ITENIEC Logo" />
    </div>
    <div className="col-5">
      <img style={fullWidthStyle} src={IMG_CERT_NIEC1ITE_LOGO_ITE} alt="ITENIEC Logo" />
    </div>
    <div className="col-1" />
  </div>
);

export const renderTwoNiecSignatures = doc => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "8rem", marginBottom: "0" }}
  >
    <div className="col-4 justify-content-center">
      <div className="row d-flex justify-content-center align-items-center">
        <img style={threeqartWidthStyle} src={IMG_CERTIFICATE_SEAL} alt="ITE Seal" />
      </div>
    </div>

    <div
      className="col-4 justify-content-center"
      style={{ marginTop: "4rem", marginBottom: "0" }}
    >
      <div className="px-4">
        <img style={fullWidthStyle} src={get(doc, "additionalData.certSignatories[0].signature")} alt="Cert Sign" />
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(doc, "additionalData.certSignatories[0].designation")}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(
              doc,
              "additionalData.certSignatories[0].organisation"
            ).substring(0, 21)}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(
              doc,
              "additionalData.certSignatories[0].organisation"
            ).substring(22, 49)}
          </p>
        </strong>
      </div>
      <p>
        <br />
      </p>
    </div>

    <div
      className="col-4 justify-content-center"
      style={{ marginTop: "4rem", marginBottom: "0" }}
    >
      <div className="px-4">
        <img style={fullWidthStyle} src={get(doc, "additionalData.certSignatories[1].signature")} alt="Cert Sign" />
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(doc, "additionalData.certSignatories[1].designation")}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(doc, "additionalData.certSignatories[1].organisation")}
          </p>
        </strong>
      </div>
      <p>
        <br />
      </p>
      <div className="text-center">
        <strong>
          <p style={timesNewRoman24Pt}>
            {doc.id}/{doc.recipient.studentId}
          </p>
        </strong>
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
      {renderLogoITE()}
      {renderAwardText(doc)}
      {renderTwoSignatures(doc)}
	  {renderITEFooter(doc)}
  </div>
  </div>
);
