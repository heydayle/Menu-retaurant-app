<template>
  <div>
    <div
      class="c-cart tw-absolute tw-z-index-50 tw-bottom-0 tw-right-0 tw-m-6 tw-rounded-full tw-bg-white"
    >
      <div class="tw-relative">
        <div
          class="tw-absolute tw--bottom-3 tw--left-2 tw-rounded-full tw-bg-green-500 tw-py-0.75 tw-px-2 tw-text-center"
        >
          <span class="tw-text-gray-300">{{ list.length }}</span>
        </div>
      </div>
      <v-btn icon dark large class="tw-p-6">
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
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.c-cart {
  z-index: 50;
}
</style>
