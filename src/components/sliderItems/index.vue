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
  <v-card>
    <div class="example-3d tw-bg-gray-900 tw-border-none">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
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
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 4 * 2;
    background-color: #2c8dfb;
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
