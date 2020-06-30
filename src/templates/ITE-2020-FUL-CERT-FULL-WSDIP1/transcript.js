import PropTypes from "prop-types";
import React from "react";
import TranscriptHeader from "../common/transcriptHeader";
import Recipient from "../common/recipient";
import ExamResults from "../common/examResults";
import ExemptionFootNote from "../common/exemptionFootNote";
import TranscriptFooter from "../common/transcriptFooter";

const Transcript = ({ document }) => (
	<div className="container">
		<div className="transcript-content">
			<TranscriptHeader />
			<Recipient doc={document} />
			<ExamResults doc={document} />
			<ExemptionFootNote doc={document} />
			<TranscriptFooter doc={document} />
		</div>
	</div>
);

Transcript.propTypes = {
	document: PropTypes.object.isRequired
};

export default Transcript;
