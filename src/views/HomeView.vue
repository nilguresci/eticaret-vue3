<script>
//import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { store } from "../store/store.js";
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import HomeContent from "../components/HomeContent.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      count: 1,
      newCount: 0,
    };
  },
  created() {},
  computed: {},
  mounted() {
    store.dispatch({
      type: "setLogin",
    });
  },
  methods: {},
  components: { Header, Menu, HomeContent, Footer },
};
</script>

<template>
  <main>
    <Header></Header>
    <Menu></Menu>
    <HomeContent></HomeContent>
    <Footer></Footer>
  </main>
</template>
