import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

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

  const { attemptLogin, error, loading } = useLogin();

  function onSubmit(e) {
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
