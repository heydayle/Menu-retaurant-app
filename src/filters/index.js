import Vue from "vue";

Vue.filter("currency", function (value) {
  if (value)
    return value.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
});
