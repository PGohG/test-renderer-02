import PropTypes from "prop-types";
import React from "react";
import {
	renderLogoITE,
	renderFullCertAwardText,
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
			{renderFullCertAwardText(document)}
			{renderTwoSignatures(document)}
			{renderITEFooter(document)}
		</div>
	</div>
);

Template.propTypes = {
	document: PropTypes.object.isRequired
};

export default Template;
