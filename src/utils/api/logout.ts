import { REFRESH_TOKEN_KEY } from "../constants";

export function logout() {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.location.href = "/login";
}
