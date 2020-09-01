import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

import {
	arial9PtL,
	arial9PtC
} from "./certStyles";

export const GradingSystem = ({ doc }) => {

  const legend = _(doc.additionalData.gradeSystem)
	.groupBy(t => t.gradeSeq)
	.map((values, key) => ({ gradeSeq: key, grades: values }))
	.orderBy(s => s.gradeSeq)
	.value();

  const legendTitle = s => {
	if (s.gradeSeq==1) {
	  return (
		  <div className="row">
			<div className="col-5" style={arial9PtC}><u>Grade</u></div>
			<div className="col-7" style={arial9PtL}><u>Description</u></div>
		  </div>
		)
	  };
  };

  const legendGrades = legend.map((s, j) => {
    const gradeLines = s.grades.map((t, i) => (
		<div key={i}>
			<div> {t.grade
			? <div className="row">
				  <div className="col-5" style={arial9PtC}>{t.grade}</div>
				  <div className="col-7" style={arial9PtL}>{t.gradeDescription} </div>
			  </div>
			:  <div className="row"> {t.gradeDescription
				? <div className="col-10" style={arial9PtC}>{t.gradeDescription} </div>
				: <div className="row"> <br /> </div>
				} </div>
			} </div>
		</div>
    ));

   	if (s.gradeSeq < 100) {
    return (
 	  <div key={j}>
        {legendTitle(s)}
        {gradeLines}
      </div>
    )
    };
  });

  return <div>{legendGrades}</div>;
};

GradingSystem.propTypes = {
  doc: PropTypes.object.isRequired
};

export default GradingSystem;
