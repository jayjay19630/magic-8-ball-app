import BACKEND_URL from "../BackendURL";

export const postSignup = (
  username: string,
  password: string,
  alreadyTakenHandler: Function
) => {
  const setAlreadyTakenError = alreadyTakenHandler;

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
      if (response.status === 422) {
        setAlreadyTakenError(true);
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("user_id", data.user.id);
      localStorage.setItem("token", data.token);
    });
};
