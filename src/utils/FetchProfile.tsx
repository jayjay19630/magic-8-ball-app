import { toast } from "react-toastify";
import BACKEND_URL from "./BackendURL";

export const getProfile = () => {
  return fetch(`${BACKEND_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: localStorage.getItem("username"),
      },
    }),
  })
    .then((response) => {
      if (response.status === 404) {
        toast.warn("You are not connected. Please check internet...");
        return;
      }
      return response.json();
    })
    .then((data) => {
      return data.cosmetics;
    });
};
