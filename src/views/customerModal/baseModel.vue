<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-20 20:38:13
 * @LastEditTime: 2021-10-20 21:03:28
 * @LastEditors: taimin_zhou
-->
<template>
  <div>
    <input type="checkbox" :checked="checked" @change="handleChange" />
    <input type="text" v-model="$store.state.inputValue" />
    <input type="text" v-model="$store.state.inputValue" />
    <el-input v-model="$store.state.inputValue" />
  </div>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: ["checked"],
  data() {
    return {
      a: 3,
    };
  },
  mounted() {
    console.log("===>>>this.", this.$store.state);
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.checked);
    },
  },
};
</script>

<style></style>
