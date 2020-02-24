import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoITEandPartner,
  renderCOM,
  renderCOMAwardText,
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
      {renderCOM()}
      {renderCOMAwardText(document)}
      {renderTwoNiecSignatures(document)}
      {renderITEFooter(document)}
      <p />
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
