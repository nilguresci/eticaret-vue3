<script>
import ProductCard from "./ProductCard.vue";
import { store } from "../store/store.js";
import $ from "jquery";

export default {
  data() {
    return {
      header: "KARMA",
      products: {
        productName: "LG Buzdolabı",
        product2Name: "Arçelik Çamaşır Makinası",
        product3Name: "Smeg Ekmek Kızartma Makinası",
        product4Name: "Arzum Saç Kurutma Makinası",
      },
      productsA: [],
      page: 0,
      pageProductSize: {},
      screenWidth: screen.width,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.windowSizeControl);
    this.windowSizeControl();
    this.pageProductSize = store.state.pageProductSize;
    this.getProducts();
    store.watch(
      () => [store.state.products],
      async () => {
        this.productsA = store.state.products;
      }
    );
    store.watch(
      () => store.state.loginInfo,
      async () => {
        this.getProducts();
      }
    );
  },
  watch: {},
  methods: {
    windowSizeControl() {
      if (screen.width < 769) {
        $(".filterSelect").removeClass("col-3");
        $(".filterIcons").removeClass("col-6");
        $(".filterSelect").addClass("col-12");
        $(".filterIcons").addClass("col-12");
      } else {
        $(".filterSelect").addClass("col-3");
        $(".filterIcons").addClass("col-6");
        $(".filterSelect").removeClass("col-12");
        $(".filterIcons").removeClass("col-12");
      }
    },
    async getProducts() {
      store
        .dispatch({
          type: "setProducts",
          body: store.state.pageProductSize,
        })
        .then(() => {
          this.productsA = store.state.products;
        });
    },
    setPage(page) {
      this.page = page;
      store.state.pageProductSize.pageNumber = page + 1;
      this.getProducts();
    },
  },
  components: { ProductCard },
};
</script>

<template>
  <div class="homeContent">
    <div class="d-flex justify-content-center">
      <div class="categoryName">Beyaz eşya</div>
      kategorisinde ki ürünler listeleniyor.
    </div>
    <div class="filters">
      <div class="row d-flex align-items-center filterCont">
        <div class="col-3 filterSelect">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>En son eklenenlere göre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-3 filterSelect">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Tüm ürünler</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div
          class="col-6 d-flex justify-content-start align-items-center filterIcons"
        >
          <button type="button" class="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-checks-grid"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"
              />
            </svg>
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-checks"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 cardContainer">
      <ProductCard
        v-for="(product, index) in productsA"
        :key="index"
        :product="product"
      ></ProductCard>
    </div>
    <div class="pgntn d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" @click="setPage(page - 1)" v-if="page != 0">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" @click="setPage(page)">
            <a class="page-link" href="#">{{ page + 1 }} </a>
          </li>
          <li class="page-item" @click="setPage(page + 1)" v-if="!(page >= 8)">
            <a class="page-link" href="#">{{ page + 2 }}</a>
          </li>
          <li class="page-item" @click="setPage(page + 2)" v-if="!(page >= 7)">
            <a class="page-link" href="#">{{ page + 3 }}</a>
          </li>
          <li class="page-item" @click="setPage(page + 1)" v-if="page != 9">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.homeContent {
  margin: 40px 40px 30px 40px;
  .categoryName {
    font-weight: 600;
  }
  .filters {
    margin-top: 1rem;
    .filterIcons {
      button {
        margin: 0 5px 0 5px;
      }
    }
  }
  .cardContainer {
    margin-top: 1rem;
  }
  .pgntn {
    margin-top: 1rem;
    .pagination {
      li a {
        border: none !important;
        color: var(--color-primary-team);
      }
    }
  }

  @media screen and (max-width: 769px) {
    .filterCont {
      flex-direction: column;
      .filterSelect,
      .filterIcons {
        margin-top: 15px;
      }
    }
  }
}
</style>
