import { toast } from "react-toastify";
import BACKEND_URL from "../BackendURL";

enum HatType {
  "None",
  "Cowboy",
  "Magician",
}

export const postHat = (username: string, hatType: HatType) => {
  return fetch(`${BACKEND_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        hatType: hatType,
      },
    }),
  }).then((response) => {
    // Returns bad input error if
    // not connected. Creates corresponding notification message.
    if (response.status === 404) {
      toast.warn("You are not connected. Please check internet...");
      return;
    }
    return response.json();
  });
};
