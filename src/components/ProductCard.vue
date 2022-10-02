<script>
//import { store } from "../store/store.js";

export default {
  data() {
    return {
      header: "KARMA",
      count: 1,
      basketCount: 0,
    };
  },
  props: {
    product: Object,
  },
  created() {},
  mounted() {},
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 1) {
        this.count--;
      }
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card content">
      <div>
        <img
          src="../../public/bebek_shampoo.webp"
          class="card-img-top"
          alt="..."
        />
      </div>

      <div class="showFirst">
        <div class="card-body productTitle">
          <h6 class="card-title d-flex justify-content-center">
            {{ product.name }}
          </h6>
        </div>
        <div class="productInfo">
          <ul class="list-group list-group-flush">
            <li class="list-group-item price">{{ product.price }} TL</li>
            <li class="list-group-item installmentPrice">
              <div class="installmentPriceText">Taksitli Fiyatı :</div>
              5 x {{ product.price / 5 }} TL
            </li>
          </ul>
        </div>
      </div>

      <div class="card-body showSecond">
        <div class="d-flex align-items-center justify-content-around firstArea">
          <div>
            {{ count }}
          </div>
          <div class="d-flex flex-column">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              @click="increase()"
            >
              +
            </button>
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              @click="decrease()"
            >
              -
            </button>
          </div>
        </div>
        <div class="secondArea d-flex justify-content-around">
          <div
            class="bascetIcon d-flex justify-content-center align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </div>
          <div class="favIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
          </div>
          <div class="filterIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-filter"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
        <div class="thirdArea">
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary">
              Ürünü incele →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  h6 {
    margin-left: 0;
    color: var(--color-gray);
    font-weight: 400;
  }
  ul {
    border-top: none !important;
    li {
      display: flex;
      justify-content: center;
      border-bottom: none;
      .installmentPriceText {
        font-weight: 700;
        margin-right: 5px;
      }
    }
    .price {
      font-weight: 700;
    }
  }

  .showSecond {
    button {
      border: none;
    }
    .firstArea {
      background-color: var(--color-secondary-background);
    }
    .secondArea {
      margin-top: 10px;
      align-items: center;
      .bascetIcon {
        border-radius: 50%;
        background-color: var(--color-primary-team);
        width: 40px;
        height: 40px;
        svg {
          color: white;
          width: 20px;
          height: 20px;
        }
      }
      .favIcon {
        color: var(--color-gray);
      }
      .filterIcon {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .thirdArea {
      margin-top: 10px;
      button {
        background-color: var(--color-primary-team);
      }
    }
  }
}

.showFirst {
  display: block;

  :hover > & {
    //parenta hover olursa
    display: none;
  }
}
.showSecond {
  display: none;

  :hover > & {
    display: block;
  }
}
</style>
