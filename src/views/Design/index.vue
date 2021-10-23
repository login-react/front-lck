<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-21 11:37:55
 * @LastEditTime: 2021-10-23 19:37:54
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
  </div>
</template>

<script>
import EventFlow from "./Event";
// import { flowList } from "./Flow";
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
export default {
  data() {
    return {
      isShow: false,
      ge: null
    };
  },
  components: {
    AsyncList,
  },
  mounted() {
    this.gn = gen(1234)
  },
  methods: {
    handleClickRun() {
      this.isShow = true;
      const list = [
        {
          name: "步骤1",
          id: "1",
          children: [
            {
              name: "步骤2",
              id: "2",
              condition: () => true,
              children: [
                {
                  name: "步骤3",
                  condition: () => false,
                  id: "3",
                },
                {
                  name: "步骤4",
                  id: "4",
                },
              ],
            },
            {
              name: "步骤02",
              id: "2",
              condition: () => false,
              children: [
                {
                  name: "步骤03",
                  id: "3",
                },
              ],
            },
          ],
        },
      ];
      const eventFlow = new EventFlow();
      eventFlow.runFlow(list);
    },
    handlePageData() {
      const value = this.gn.next();
      console.log(`value--->>>>>`, value);
    },
    handleInit() {
      this.gn = gen(5678);
      console.log('初始化成功🚗')
    }
  },
};
</script>

<style></style>
