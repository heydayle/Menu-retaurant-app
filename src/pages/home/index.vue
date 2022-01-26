<template>
  <div>
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
          :style="{
            background: `url(${item.cover})`,
            backgroundSize: 'cover',
          }"
          class="tw-p-4 tw-rounded-lg tw-border tw-border-solid hover:tw-border-green-500 tw-duration-900 tw-transition"
        >
          <div class="tw-flex tw-space-x-4 tw-items-center">
            <span v-html="item.img"></span>
            <span class="tw-text-gray-600 tw-font-semibold">{{ item.i }}</span>
          </div>
        </GridItem>
      </GridLayout>
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
  },
  data() {
    return {
      layout: menu,
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
};
</script>

<style></style>
