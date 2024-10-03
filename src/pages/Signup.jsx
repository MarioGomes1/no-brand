import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";

function Signup() {
  const StyledSignup = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  `;
  return (
    <StyledSignup>
      <SignupForm />
    </StyledSignup>
  );
}

export default Signup;
