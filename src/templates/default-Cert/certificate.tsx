import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import { PrintWatermark } from "./common/PrintWatermark";
import certificateBg from "./common/certificate_background.png";

export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => (
  <>
    <PrintWatermark />
    <div
      className="p-2 container"
      style={{
        backgroundImage: `url('${certificateBg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "10px solid #324353"
      }}
    >
      <div
        className="p-2"
        style={{
          border: "0px solid #324353"
        }}
      >
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
          {document.recipient.name}
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title" style={{ textAlign: "center" }}>
          {document.name}
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title" style={{ textAlign: "center" }}>
          {format(document.graduationDate, "DD/MM/YYYY")}
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
          {document.id}
        </div>
      </div>
    </div>
  </>
);
