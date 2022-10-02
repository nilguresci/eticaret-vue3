import { createStore } from "vuex";
import { authService } from "../services/AuthLoginService";
import { productService } from "../services/ProductService";

export const store = createStore({
  state() {
    return {
      count: 0,
      products: [],
      loginInfo: "",
      pageProductSize: {
        pageNumber: 1,
        pageSize: 4,
      },
    };
  },
  mutations: {
    getLoginInfo(state, payload) {
      state.loginInfo = payload.data;
    },
    getProducts(state, payload) {
      state.products = payload.data;
    },
  },
  actions: {
    setLogin({ commit }) {
      const authLoginData = {
        userName: "user",
        password: "123456",
      };
      authService
        .login(authLoginData)
        .then((res) => {
          commit("getLoginInfo", { data: res });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setProducts({ commit }, body) {
      let loadingData = [
        { name: "Loading", price: "Loading" },
        { name: "Loading", price: "Loading" },
        { name: "Loading", price: "Loading" },
        { name: "Loading", price: "Loading" },
      ];
      commit("getProducts", { data: loadingData });
      productService
        .getProducts(body.body)
        .then((res) => {
          commit("getProducts", { data: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
