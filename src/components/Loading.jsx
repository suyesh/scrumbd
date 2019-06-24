import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

function Loading() {
  return (
    <Dimmer active inverted>
      <Loader />
    </Dimmer>
  );
}

export { Loading };
