import PropTypes from "prop-types";
import React from "react";
import {
	renderLogoITE,
	renderCOM,
	renderCOMAwardText,
	renderTwoSignatures,
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

      {renderLogoITE()}
      {renderCOM()}
      {renderCOMAwardText(document)}
      {renderTwoSignatures(document)}
      {renderITEFooter(document)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
