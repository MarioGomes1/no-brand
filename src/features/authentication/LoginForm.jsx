import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLogin } from "./useLogin";

const Form = styled.form`
  width: 50rem;
`;

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { attemptLogin, loading } = useLogin();

  function onSubmit(e) {
    // e.preventDefault();
    attemptLogin(e);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          type="text"
          {...register("username", {
            required: "Name is required",
          })}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Name is required", // will change later
          })}
        />
      </div>
      <button>Login</button>
    </Form>
  );
}

export default LoginForm;
