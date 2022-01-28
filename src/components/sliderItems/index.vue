<template>
  <v-dialog
    v-model="isShow"
    class="tw-m-0"
    :overlay-color="'tw-bg-black'"
    :overlay-opacity="0.7"
    :retain-focus="false"
    content-class="tw-border-none"
    persistent
    scrollable
  >
    <v-card v-if="products.products" dark class="tw-p-4">
      <v-card-text class="tw-text-gray-300 tw-flex tw-justify-between tw-pt-2">
        <div class="tw-font-semibold">{{ products.i }}</div>
        <div>
          <v-btn light icon @click="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--eva tw-text-gray-300"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"
              ></path>
            </svg>
          </v-btn>
        </div>
      </v-card-text>
      <div class="example-3d tw-border-none">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in products.products" :key="index">
            <div>
              <div>{{ item.name }}</div>
              <div>{{ item.price }}</div>
              <div>
                <v-menu
                  offset-y
                  left
                  nudge-left="415"
                  nudge-top="145"
                  :close-on-content-click="false"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Options
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item class="tw-w-64 tw-space-x-4">
                      <v-radio-group v-model="radioSugar">
                        <template v-slot:label>
                          <div><strong>Sugar</strong></div>
                        </template>
                        <v-radio
                          v-for="n in 4"
                          :key="n"
                          :label="`${25 * n} %`"
                          :value="n"
                        ></v-radio>
                      </v-radio-group>
                      <v-radio-group v-model="radioIce">
                        <template v-slot:label>
                          <div><strong>Ice</strong></div>
                        </template>
                        <v-radio
                          v-for="n in 4"
                          :key="n"
                          :label="`${25 * n} %`"
                          :value="n"
                        ></v-radio>
                      </v-radio-group>
                      <v-btn
                        icon
                        large
                        color="blue"
                        elevation="2"
                        class="tw-bg-green-500 tw-mt-auto tw-mb-6"
                        @click="select(item, radioSugar, radioIce)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="iconify iconify--icons8 tw-text-white"
                          width="32"
                          height="32"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7H4zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm3-14v3h-3v2h3v3h2v-3h3v-2h-3V7h-2zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </v-card>
  </v-dialog>
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
      type: Object,
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
      radioSugar: 1,
      radioIce: 1,
    };
  },
  methods: {
    select(item, sugar, ice) {
      this.$emit("onSelect", { ...item, sugar: sugar, ice: ice });
    },
    close() {
      this.$emit("onClose");
    },
  },
};
</script>

<style lang="scss">
.v-dialog {
  margin: 0;
  max-height: 100%;
}
.v-dialog__container {
  display: unset !important;
  width: 100%;
  .v-dialog__content {
    z-index: 40 !important;
  }
}

.example-3d {
  height: 100vh;
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
.v-menu {
  display: unset !important;
}
.v-input--selection-controls__input {
  margin-right: 16px;
}
.v-input--selection-controls__input input[role="radio"] {
  opacity: 1 !important;
}
</style>
