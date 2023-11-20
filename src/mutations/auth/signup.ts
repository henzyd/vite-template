import { useMutation } from "@tanstack/react-query";
import axios from "axios";

async function signUp(data: Record<string, any>) {
  const { data: response } = await axios.post("auth/users/", data);

  return response.data;
}

export default function useSignUp() {
  return useMutation(signUp);
}
