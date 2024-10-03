import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createUser } from "../../services/apiUsers";
import { useCreateUser } from "./useCreateUser";

const Form = styled.form`
  width: 50rem;
`;

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createNewUser, isCreating } = useCreateUser();

  // const queryClient = useQueryClient();

  // const query = useQuery({
  //   queryKey:['signup'],
  //   queryFn:createUser
  // })

  function onSubmit(e) {
    // e.preventDefault();
    createNewUser(e);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* <div>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: "Name is required",
          })}
        />
      </div> */}
      <div>
        <label>Username</label>
        <input
          type="text"
          {...register("username", {
            required: "Name is required",
          })}
        />
      </div>
      {/* <div>
        <label>Gender</label>
        <input
          type="text"
          {...register("gender", {
            required: "Please select a gender",
          })}
        />
      </div> */}
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
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
      <button>Sign up</button>
    </Form>
  );
}

export default SignupForm;
