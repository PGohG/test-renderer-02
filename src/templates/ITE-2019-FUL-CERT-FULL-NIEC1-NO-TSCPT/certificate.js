import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoITEandPartner,
  renderFullCertAwardText,
  renderTwoNiecSignatures,
  renderITEFooter
} from "../common/certDetails";


const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      <p>
        <br />
        <br />
      </p>

      {renderLogoITEandPartner()}
      {renderFullCertAwardText(document)}
      {renderTwoNiecSignatures(document)}
      {renderITEFooter(certificate)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
