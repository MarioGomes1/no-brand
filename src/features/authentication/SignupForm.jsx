import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Form = styled.form`
    width: 300px;
  `;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input name="firstName" placeholder="First Name" type="text" />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" placeholder="Last Name" type="text" />
      </div>
      <div>
        <label>Gender</label>
        <input name="gender" placeholder="Last Name" type="text" />
      </div>
      <div>
        <label>Email</label>
        <input name="email" placeholder="email" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" placeholder="password" type="text" />
      </div>
      <button>Sign up</button>
    </Form>
  );
}

export default SignupForm;
