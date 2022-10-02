import axios from "axios";
export const productService = {
  getProducts,
};
const apiUrl = "https://api.akilliticaretim.com/api/Product/ListProductsV2";

const token = localStorage.getItem("token");
const authHeaders = {
  Authorization: `Bearer ${token}`,
  GUID: "0739-E657-C4F4-98B4",
  "Content-Type": "application/json",
};

function getProducts(body) {
  return axios
    .post(`${apiUrl}`, body, { headers: authHeaders })
    .then((res) => {
      console.log("products", res.data.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
