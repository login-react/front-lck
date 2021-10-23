<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-21 11:37:55
 * @LastEditTime: 2021-10-23 21:06:46
 * @LastEditors: taimin_zhou
-->
<template>
  <div>
    <el-button @click="handlePageData">线是否连接</el-button>
    <div @click="handleClickRun">点击运行</div>
    <el-button @click="handleInit">点击重置</el-button>

    <div v-if="isShow">
      <AsyncList />
    </div>
    <Dia ref="diaConfig" @on-ok="handleOk" />
  </div>
</template>

<script>
import axios from "axios";
import { flowList } from "./Flow";
import { gen } from "./Design";
import LoadingComponent from "../AsyncList/LoadingComponent.vue";
import ErrorComponent from "../AsyncList/ErrorComponent.vue";
// const designUtils = new DesignUtils(flowList.nodeList, flowList.lineList);
// console.log("test :>> ", test);
const AsyncList = () => ({
  component: import(/*webpackChunkName: 'list'*/ "../AsyncList/List.vue"),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000,
});
import Dia from "./Dia.vue";
export default {
  data() {
    return {
      isShow: false,
      ge: null,
      geState: null,
    };
  },
  components: {
    AsyncList,
    Dia,
  },
  mounted() {
    this.gn = gen(flowList.nodeList);
    if (this.geState === null) {
      this.handleNext();
    }
  },
  methods: {
    handleClickRun() {
      this.isShow = true;
    },
    handleNext() {
      this.genState = this.gn.next();
      // console.log("进入 gen 下一个状态", this.genState);
    },
    handleOk() {
      this.$refs.diaConfig.close();
      this.handleNext();
    },
    handlePageData() {
      // const value = this.gn.next();
      const { done, value } = this.genState;
      if (done) return;
      if (!value || !value.type) return;
      if (value.type === "QUERY_MODEL") {
        axios.get("http://localhost:3000/posts/1").then((response) => {
          console.log("获取到数据: ", response);
          if (response.status === 200) {
            this.handleNext();
          }
        });
      }
      if (value.type === "CONFIRM") {
        this.$refs.diaConfig.open(value);
      }
    },
    handleInit() {
      console.log("---------->>>");
      this.gn = gen(5678);
    },
  },
};
</script>

<style></style>
