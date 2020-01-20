import jwtDecode from "jwt-decode";

export const isLoggedIn = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData) {
    return false;
  }

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

  if (!userData) {
    return null;
  }

  if (userData.token) {
    const { id, exp, firstname } = jwtDecode(userData.token);

    const currentTime = Date.now() / 1000;

    if (exp < currentTime) {
      // Logout user
      localStorage.removeItem("userData");
      return null;
    }
    return {
      token: userData.token,
      user_id: id,
      isNewUser: userData.isNewUser,
      firstname
    };
  }
};

export const isNewUser = () => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return null;
    }

    return userData.isNewUser;
  } catch (error) {
    return null;
  }
};

export const userOnboardedSuccessfully = () => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return false;
    }

    if (userData.isNewUser) {
      userData.isNewUser = false;
    }
    localStorage.setItem("userData", JSON.stringify(userData));
    return true;
  } catch (error) {
    return false;
  }
};
