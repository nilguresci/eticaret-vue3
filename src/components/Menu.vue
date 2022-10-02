<script>
//import { store } from "../store/store.js";
import $ from "jquery";

export default {
  data() {
    return {
      menuItems: [
        {
          name: "Beyaz Eşya",
          id: 1,
          subTitles: [
            { name: "Şampuanlar", items: ["şampuan 1", "şampuan 2"] },
            { name: "Vücut temizliyiciler", items: ["jel 1", "jel 2"] },
          ],
        },
        {
          name: "Ayakkabı",
          id: 2,
          subTitles: [
            { name: "Spor ayakkabılar", items: ["Nike", "Adidas"] },
            { name: "Terlikler", items: ["Terlik", "Plaj Terliği"] },
          ],
        },
        {
          name: "Mutfak Gereçleri",
          id: 3,
          subTitles: [
            { name: "Tencereler", items: ["Karaca", "Setler"] },
            { name: "Yemek Takımları", items: ["Karaca", "Setler"] },
          ],
        },
        {
          name: "Televizyonlar & Ses Sistemleri",
          id: 4,
        },
        {
          name: "Ev Eşyaları",
          id: 5,
        },
        {
          name: "Kişisel Bakım",
          id: 6,
        },
      ],
      isCollapsed: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    collapseChanged() {
      this.isCollapsed = !this.isCollapsed;

      if (!this.isCollapsed) {
        $(".menuLine").css("height", "100px");
      } else {
        $(".menuLine").css("height", "55px");
      }
    },
  },
};
</script>

<template>
  <div class="menuLine">
    <div class="d-flex">
      <div v-for="(item, id) in menuItems" :key="id">
        <div
          class="menuItem"
          data-bs-toggle="collapse"
          :href="`#collapseExample${item.id}`"
          role="button"
          aria-expanded="false"
          :aria-controls="`collapseExample${item.id}`"
          @click="collapseChanged()"
        >
          {{ item.name }}
        </div>
        <div
          class="collapse"
          :id="`collapseExample${item.id}`"
          v-for="(submenu, index) in item.subTitles"
          :key="index"
        >
          <div class="d-flex subMenus">
            <div class="menuSubItem">
              <div class="menuSubTitleHeader">
                {{ submenu.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="secondMenuLine d-flex align-items-center">
    <div class="pageName">Anasayfa</div>
    >
    <div class="menuName">Beyaz Eşya</div>
  </div>
</template>

<style lang="scss">
.menuLine {
  height: 55px;
  background-color: var(--color-primary-team);
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  padding-left: 35px;
  .menuItem {
    margin-right: 15px;
    color: var(--color-primary-text);
    font-weight: 700;
    font-size: 13px;
  }
}
.subMenus {
  background-color: var(--color-primary-team);
  color: var(--color-primary-text);
}
.secondMenuLine {
  padding-left: 35px;
  height: 55px;
  background-color: var(--color-secondary-background);
  .pageName {
    margin-right: 10px;
    font-weight: 600;
    color: var(--color-gray);
  }
  .menuName {
    margin-left: 10px;
    font-weight: 600;
  }
}

@media screen and (max-width: 860px) {
  .menuLine {
    display: none;
  }
}
</style>
