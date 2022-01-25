<template>
  <div>
    Homepages
    <div>
      <GridLayout
        :layout.sync="layout"
        :col-num="8"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="false"
        :vertical-compact="true"
        :use-css-transforms="true"
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
          class="tw-p-4 tw-rounded-lg"
          :style="{ background: `url('../../assets/logo.png')` }"
        >
          <img :src="'../../assets/' + item.img" />
          <span class="tw-text-gray-600 tw-font-semibold">{{
            item.i
          }}</span></GridItem
        >
      </GridLayout>
    </div>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layout: [
        {
          x: 0,
          y: 0,
          w: 2,
          h: 7.5,
          i: "1. Coffee",
          img: "logo.png",
          static: true,
        },
        { x: 2, y: 0, w: 2, h: 7.5, i: "2. Tea", img: "", static: false },
        { x: 4, y: 0, w: 2, h: 7.5, i: "3", img: "", static: false },
        { x: 6, y: 0, w: 2, h: 7.5, i: "4", img: "", static: false },
        { x: 0, y: 2, w: 2, h: 7.5, i: "5", img: "", static: false },
        { x: 2, y: 4, w: 2, h: 7.5, i: "6", img: "", static: false },
        { x: 4, y: 6, w: 2, h: 7.5, i: "7", img: "", static: false },
        { x: 6, y: 8, w: 2, h: 7.5, i: "8", img: "", static: false },
      ],
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
};
</script>

<style></style>
