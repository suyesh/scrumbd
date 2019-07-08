import { truncate } from "lodash";

function TruncatedText({ text, length }) {
  return truncate(text, {
    length: length || 24,
    separator: /,? +/
  });
}

export { TruncatedText };
