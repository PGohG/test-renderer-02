import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

export const PrintWatermark: FunctionComponent = () => (
  <div
    css={css`
      width: 21cm;
      height: 29.7cm;
      opacity: 0;
      display: none;
      position: absolute;
      background-image: url("/static/images/watermark.svg");
		backgroundSize: cover;
      background-repeat: repeat;

      @media print {
		  width: 21cm;
		  height: 29.7cm;
        opacity: 0.6;
        display: block;
      }
    `}
    className="print-only"
  />
);

