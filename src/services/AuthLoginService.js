import axios from "axios";
export const authService = {
  login,
};

const apiUrl = "https://api.akilliticaretim.com/api/Auth/Login";
let token = "";
const guidHeader = {
  GUID: `0739-E657-C4F4-98B4`,
  "Content-Type": "application/json",
};

function login(authLoginData) {
  console.log(authLoginData);

  return axios
    .post(`${apiUrl}`, authLoginData, { headers: guidHeader })
    .then((res) => {
      console.log("authres", res);
      token = res.data.data.token;

      localStorage.setItem("token", token);
      return token;
    })
    .catch((error) => {
      console.log(error);
    });
}
