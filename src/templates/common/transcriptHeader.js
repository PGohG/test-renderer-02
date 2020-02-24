import { IMG_TRANSCRIPT_ITE } from "./images";
import React from "react";
import {
	arial12PtL,
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};


const TranscriptHeader = () => (
  <div className="container" style={arial12PtL}>
    <br />
    <br />
    <div className="row">
		<div className="col-11">
			  <img style={fullWidthStyle}
			  src={IMG_TRANSCRIPT_ITE}
			  className="ITE-logo"
			  title="ITE"
			  alt="ITE Transcript Header"
			  />
		</div>
    </div>

    <br />
  </div>
);

export default TranscriptHeader;
