import jwtDecode from "jwt-decode";

export const isLoggedIn = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData.token) {
    const decodedToken = jwtDecode(userData.token);

    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      // Logout user
      localStorage.removeItem("userData");
      return false;
    }
    return true;
  }

  return false;
};

export const getUserDetails = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData.token) {
    const { id, exp } = jwtDecode(userData.token);

    const currentTime = Date.now() / 1000;

    if (exp < currentTime) {
      // Logout user
      localStorage.removeItem("userData");
      return null;
    }
    return { token: userData.token, user_id: id };
  }
};
