import Axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return Axios.create({
    headers: {
      authorization: token
    }
  });
};
