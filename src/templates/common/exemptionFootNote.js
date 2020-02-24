import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import {
	arial12PtL
} from "./certStyles";


const ExemptionFootNote = ({ doc }) => {

  const footer = _(doc.additionalData.transcriptNote)
	.groupBy(t => t.noteSeq)
	.map((values, key) => ({ noteSeq: key, notes: values }))
	.orderBy(s => s.noteSeq)
	.value();

  const footerTitle = s => {
	if (s.noteSeq==1) {
	  return (
		  <div className="row">
			<div className="col-11"><strong> NOTE: </strong></div>
		  <br />
		  <br />
		  </div>

		)
	  };
  };

  const footnotes = footer.map((s, j) => {
    const footerfootnotes = s.notes.map((t, i) => (
      <div className="row" key={i}>
        <div className="col-11">{Number(t.noteSeq).toString()} ) &nbsp; {t.note}</div>
      </div>
    ));

    return (
 	 <div className="container" style={arial12PtL}>
 	  <div key={j}>
        {footerTitle(s)}
        {footerfootnotes}
      </div>
 	 </div>
    );
  });

  return <div>{footnotes}</div>;

};

ExemptionFootNote.propTypes = {
  doc: PropTypes.object.isRequired
};

export default ExemptionFootNote;
