import React from "react";
import styled from "styled-components";

function SignIn({ signInWithGoogle, user }) {
  return (
    <div>
      <button onClick={signInWithGoogle}>SignIn</button>
    </div>
  );
}

export default SignIn;
