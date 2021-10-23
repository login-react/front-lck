<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-20 20:25:15
 * @LastEditTime: 2021-10-21 13:42:02
 * @LastEditors: taimin_zhou
-->
<template>
  <div id="app">
    <!-- <base-model v-model="checked" @change="checked = $event"></base-model> -->
    <router-view />
  </div>
</template>
<script>
// import baseModel from "./views/customerModal/baseModel.vue";
export default {
  components: {
    // baseModel,
  },
  data() {
    return {
      checked: true,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
