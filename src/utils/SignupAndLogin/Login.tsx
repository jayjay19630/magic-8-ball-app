import { toast } from "react-toastify";
import BACKEND_URL from "../BackendURL";

export const postLogin = (username: string, password: string) => {
  return fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => {
      // Returns bad input error if password is incorrect or if
      // not connected. Creates corresponding notification message.
      if (response.status === 422) {
        toast.error("Password is incorrect !");
        return;
      } else if (response.status === 404) {
        toast.warn("You are not connected. Please check internet...");
        return;
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("user_id", data.user.id);
      localStorage.setItem("token", data.token);
    });
};
