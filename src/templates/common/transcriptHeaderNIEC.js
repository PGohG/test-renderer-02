import { IMG_TRANSCRIPT_NIECITE } from "./images";
import React from "react";
import {
	arial12PtL,
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};


const TranscriptHeaderNIEC = () => (
  <div className="container" style={arial12PtL}>
    <br />
    <br />
    <div className="row">
		<div className="col-11">
			  <img style={fullWidthStyle}
			  src={IMG_TRANSCRIPT_NIECITE}
			  className="NIECITE-logo"
			  title="NIECITE"
			  alt="ITE Transcript Header"
			  />
		</div>
    </div>

    <br />
  </div>
);

export default TranscriptHeaderNIEC;
