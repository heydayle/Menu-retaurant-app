<template>
  <div class="tw-bg-gray-900 tw-py-6" style="height: 100vh">
    <div>
      <GridLayout
        :layout.sync="layout"
        :col-num="8"
        :row-height="30"
        :is-draggable="false"
        :is-resizable="false"
        :vertical-compact="false"
        :use-css-transforms="false"
      >
        <GridItem
          v-for="(item, index) in layout"
          :key="index"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          class="tw-p-4 tw-rounded-lg tw-border tw-border-solid tw-border-gray-300 tw-bg-gray-700 hover:tw-drop-shadow-xl"
        >
          <MenuItem :item="item" @select="selectMenuItem" />
        </GridItem>
      </GridLayout>
    </div>
    <SwiperMenu
      :isShow="isShowList"
      :products="menuItem"
      @onSelect="select"
      @onClose="close"
    />
    <Cart :list.sync="itemCart" :total="total" @update="updateList" />
    <div class="tw-absolute tw-top-10 tw-z-50 tw-left-1/2">
      <v-alert
        class="c-alert-remove tw-bg-red-400 tw-px-6"
        color="red lighten-2"
        border="top"
        transition="scale-transition"
        :value="isAlert"
        >Removed</v-alert
      >
      <v-alert
        class="c-alert-add tw-bg-green-400 tw-px-6"
        color="green lighten-2"
        border="top"
        transition="scale-transition"
        :value="isAdd"
        >Add <strong>{{ isAdd ? item.name : "" }}</strong> into cart</v-alert
      >
    </div>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import { menu } from "../../misc/enums";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    MenuItem: () => import("./../../components/menuItem/index.vue"),
    SwiperMenu: () => import("./../../components/sliderItems/index"),
    Cart: () => import("./../../components/cart/index.vue"),
  },
  data() {
    return {
      layout: menu,
      draggable: true,
      resizable: true,
      index: 0,

      menuItem: null,
      isShowSwiper: false,
      isShowList: false,
      isAlert: false,
      isAdd: false,

      itemCart: [],
      total: 0,
      item: null,
    };
  },
  methods: {
    selectMenuItem(item) {
      this.menuItem = item;
      this.isShowList = true;
    },
    select(data) {
      this.itemCart.push(data);
      this.item = data;
      this.isAdd = true;
      this.updateTotal();
      setTimeout(() => {
        this.isAdd = false;
      }, 3000);
    },
    updateList(list) {
      this.isAlert = true;
      this.itemCart = list;
      this.updateTotal();
      setTimeout(() => {
        this.isAlert = false;
      }, 3000);
    },
    updateTotal() {
      this.itemCart.forEach((item) => (this.total += parseFloat(item.price)));
    },
    close() {
      this.isShowList = false;
    },
  },
};
</script>

<style lang="scss">
.c-alert-add {
  padding: 6px 8px !important;
  background: rgb(77, 253, 144) !important;
  color: #fff !important;
}

.c-alert-remove {
  padding: 6px 8px !important;
  background: rgb(255, 109, 133) !important;
  color: #fff !important;
}
</style>
