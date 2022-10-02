<script>
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
//import { store } from "../store/store.js";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: { Header, Menu, Footer },
};
</script>

<template>
  <main>
    <section class="heading">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-in-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
          />
          <path
            fill-rule="evenodd"
            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
        Login
      </h1>
      <p>KARMA'ya Hoş Geldiniz</p>
    </section>

    <section class="form">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>

        <div class="form-group">
          <a href="" class="align-self-scretch">Üye ol</a>
          <router-link to="/"
            ><button type="submit" class="btn btn-block">
              Giriş
            </button></router-link
          >
        </div>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--color-primary-team);
  p {
    color: var(--color-gray);
  }
}

.form {
  width: 70%;
  margin: 0 auto;
  .form-group {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    input,
    textarea,
    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      margin-bottom: 10px;
      font-family: inherit;
    }
    label {
      text-align: left;
      display: block;
      margin: 0 0 5px 3px;
    }

    // .btn {
    //   padding: 10px 20px;
    //   border: 1px solid var(--color-primary-team);
    //   border-radius: 5px;
    //   background: var(--color-primary-team);
    //   color: var(--color-primary-text);
    //   font-size: 16px;
    //   font-weight: 700;
    //   cursor: pointer;
    //   text-align: center;
    //   appearance: button;
    //   display: flex;
    //   align-items: center;
    // }
  }
  a {
    color: var(--color-primary-team);
  }
  .btn {
    padding: 10px 20px;
    border: 1px solid var(--color-primary-team);
    border-radius: 5px;
    background: var(--color-primary-team);
    color: var(--color-primary-text);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    appearance: button;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .form {
    width: 90%;
  }

  .heading h1 {
    font-size: 2rem;
  }

  .heading p {
    font-size: 1.5rem;
  }
}
</style>
