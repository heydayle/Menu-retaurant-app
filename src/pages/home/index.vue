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
    <Cart :list="itemCart" />
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

      itemCart: [],
    };
  },
  methods: {
    selectMenuItem(item) {
      this.menuItem = item;
      this.isShowList = true;
    },
    select(data) {
      this.itemCart.push(data);
    },
    close() {
      this.isShowList = false;
    },
  },
};
</script>

<style></style>
