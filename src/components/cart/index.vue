<template>
  <div>
    <div
      v-if="isShow"
      class="c-overlay tw-absolute tw-z-40 tw-top-0 tw-bg-black tw-opacity-40 tw-w-full"
    />
    <div
      class="c-cart tw-absolute tw-z-index-50 tw-bottom-0 tw-right-0 tw-m-6 tw-rounded-full tw-bg-white"
    >
      <div class="tw-relative">
        <div
          class="tw-absolute tw--bottom-3 tw--left-2 tw-rounded-full tw-bg-green-500 tw-py-0.75 tw-px-2 tw-text-center"
        >
          <span class="tw-text-gray-300">{{ listItem.length }}</span>
        </div>
      </div>
      <v-btn icon dark large class="tw-p-6" @click="isShow = !isShow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--heroicons-outline tw-text-gray-900"
          width="22"
          height="22"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </v-btn>
    </div>
    <v-dialog
      v-model="isShow"
      class="c-v-dialog-cart"
      :overlay-color="'tw-bg-black'"
      persistent
    >
      <v-card class="tw-max-w-96">
        <v-card-title class="tw-flex tw-justify-between">
          <div>Cart</div>
          <div>
            <v-btn light icon @click="isShow = false">
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
        </v-card-title>
        <v-card-text v-if="listItem.length > 0">
          <div class="tw-space-x-4 tw-font-semibold">
            <span>Name</span>
            <span>Sugar</span>
            <span>Ice</span>
          </div>
          <div
            v-for="(item, index) in listItem"
            :key="index"
            class="tw-flex tw-space-x-4 tw-items-center"
          >
            <div class="tw-w-14">{{ item.name }}</div>
            <div class="tw-w-6">{{ item.sugar }}</div>
            <div class="tw-min-w-10">{{ item.ice }}</div>
            <div class="tw-min-w-10">
              <v-btn light icon @click="removeItem(item)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--eva tw-text-red-300"
                  width="22"
                  height="22"
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
          </div>
          <div class="tw-space-x-4 tw-font-semibold">
            <span class="tw-text-xl">Total: {{ total | currency }}</span>
          </div>
        </v-card-text>
        <v-card-text v-else>Empty</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    list: {
      type: Array,
      required: false,
      default: null,
    },
    total: {
      type: Number,
    },
  },
  computed: {
    listItem: {
      get() {
        return this.list;
      },
      set() {
        this.$emit("update", this.list);
      },
    },
    // total: {
    //   get: function () {
    //     let total = 0;
    //     let arr = this?.list ? this?.list : [];
    //     arr.forEach((item) => (total += parseFloat(item.price)));
    //     return total;
    //   },
    //   set: function () {
    //     this.$emit("update", this.list);
    //   },
    // },
  },
  methods: {
    removeItem(item) {
      this.list = this.list.filter((itemList) => itemList.uid !== item.uid);
      this.$emit("update", this.list);
    },
  },
};
</script>

<style lang="scss">
.c-overlay {
  height: 100vh;
}
.c-cart {
  z-index: 50;
}
.c-v-dialog-cart {
  .v-dialog {
    max-width: 400px;
  }
}
</style>
