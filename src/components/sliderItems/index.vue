<template>
  <!-- <v-dialog
    v-model="isShow"
    :overlay-color="'tw-bg-black'"
    :overlay-opacity="1"
    :retain-focus="false"
    content-class="tw-rounded-lg tw-shadow-none tw-max-w-102"
    persistent
    scrollable
  > -->
  <v-card v-if="products.products">
    <div class="example-3d tw-bg-gray-900 tw-border-none">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in products.products" :key="index">
          <div>
            <div>{{ item.name }}</div>
            <div>{{ item.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </v-card>
  <!-- </v-dialog> -->
</template>

<script>
import "swiper/swiper-bundle.css";

import Swiper from "./../../plugins/swiper";
export default {
  components: {
    ...Swiper.components,
  },
  props: {
    isShow: {
      type: Boolean,
    },
    products: {
      type: Array,
    },
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.example-3d {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 0;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 4 * 2;
    background-color: #7c7c7c;
    background-position: center;
    background-size: cover;
    color: #fff;
  }

  .swiper-pagination {
    \deep\ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
</style>
