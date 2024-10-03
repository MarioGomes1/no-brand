import axios from "./axiosConfig";

export async function createUser(newUser) {
  try {
    const data = await axios.post("/auth/register", newUser);
    const res = await data.json();
    console.log(res);
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginUser(user) {
  try {
    const data = await axios.post("/auth/login", user);
    const res = await data.json();
  } catch (error) {
    throw new Error(error);
  }
}
