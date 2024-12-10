import axios from "./axiosConfig";

export async function createUser(newUser) {
  try {
    const data = await axios.post("/auth/register", newUser);
    const res = await data.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginUser(user) {
  try {
    const data = await axios.post("/auth/login", user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function logoutUser() {
  try {
    const { message } = await axios.post("auth/logout");
    return message;
  } catch (err) {
    throw new Error(err);
  }
}
