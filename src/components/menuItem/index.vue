<template>
  <div class="tw-group" @click="selectItem">
    <div class="tw-flex tw-space-x-4 tw-items-center">
      <span v-html="item.img" class="tw-text-gray-300"></span>
      <span class="tw-text-gray-300 tw-font-semibold">{{ item.i }}</span>
    </div>
    <!-- <div class="tw-border tw-rounded-full"> -->
    <div
      class="tw-m-auto tw-mt-4 tw-w-44 tw-h-48 tw-transition tw-transform hover:tw-scale-110"
      :style="{
        background: `url(${item.cover})`,
        backgroundSize: 'cover',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    selectItem() {
      this.$emit("select", this.item);
    },
  },
};
</script>

<style></style>
