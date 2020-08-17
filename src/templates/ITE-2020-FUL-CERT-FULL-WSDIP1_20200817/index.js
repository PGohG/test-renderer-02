import ITECert from "./certificate";
import ITETranscript from "./transcript";
import ITEMedia from "../common/media";

export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: ITECert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: ITETranscript
  },
  {
    id: "media",
    label: "OpenCerts Media",
    template: ITEMedia
  }
];

export default templates;