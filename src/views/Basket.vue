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
    <Header></Header>
    <Menu></Menu>

    <h6>Sepetiniz</h6>
    <div class="container">
      <div class="basketItem d-flex justify-content-between align-items-center">
        <img class="" src="../../public/bebek_shampoo.webp" alt="" />
        <div class="itemName">
          Dalin Bebek Şampuanı 500 ml
          <div></div>
        </div>
        <div class="d-flex align-items-center count">
          <div>2 adet</div>
          <div class="d-flex">
            <button class="btn countChanger">+</button>
            <button class="btn countChanger">-</button>
          </div>
        </div>
        <div class="price">250 TL</div>
      </div>
      <div class="basketItem d-flex justify-content-between align-items-center">
        <img src="../../public/bebek_shampoo.webp" alt="" />
        <div class="itemName">
          Üçüz Bebek Arabası
          <text></text>
        </div>
        <div class="d-flex align-items-center count">
          <div>1 adet</div>
          <div class="d-flex">
            <button class="btn countChanger">+</button>
            <button class="btn countChanger">-</button>
          </div>
        </div>
        <div class="price">16320 TL</div>
      </div>
      <div class="basketItem d-flex justify-content-between align-items-center">
        <img src="../../public/bebek_shampoo.webp" alt="" />
        <div class="itemName">
          <div>Bebek Küveti</div>
        </div>
        <div class="d-flex align-items-center count">
          <div>1 adet</div>
          <div class="d-flex">
            <button class="btn countChanger">+</button>
            <button class="btn countChanger">-</button>
          </div>
        </div>
        <div class="price">8425 TL</div>
      </div>
      <div class="basketItem d-flex justify-content-between align-items-center">
        <img src="../../public/bebek_shampoo.webp" alt="" />
        <div class="itemName">
          <div>Ayıcıklı Bebek Süngeri</div>
        </div>
        <div class="d-flex align-items-center count">
          <div>3 adet</div>
          <div class="d-flex">
            <button class="btn countChanger">+</button>
            <button class="btn countChanger">-</button>
          </div>
        </div>
        <div class="price">6680 TL</div>
      </div>
      <div class="d-flex justify-content-end mt-4 totalPrice">
        Toplam: 32.000 TL
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<style lang="scss">
main {
  h6 {
    margin: 1rem 0 1rem 30px;
  }
  .container {
    margin-top: 2rem;
    .basketItem {
      margin-bottom: 15px;
      img {
        width: 55px;
        height: 55px;
      }
      .countChanger {
        margin: 0 5px 0 5px;
      }
      .itemName {
        text-align: left;
        width: 25%;
      }
      .count {
        width: 15%;
      }
    }
    .totalPrice {
      font-weight: bold;
    }
  }
}
</style>
