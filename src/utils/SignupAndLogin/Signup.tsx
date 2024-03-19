import { toast } from "react-toastify";
import BACKEND_URL from "../BackendURL";

// Backend API call to register a new user
export const postSignup = (username: string, password: string) => {
  return fetch(`${BACKEND_URL}/users`, {
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
      // Returns bad input error if username is already taken or if
      // not connected. Creates corresponding notification message.
      if (response.status === 422) {
        toast.error("Username already taken!");
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
