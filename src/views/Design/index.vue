<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-21 11:37:55
 * @LastEditTime: 2021-10-23 20:20:06
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
    <Dia ref="diaConfig" onOk="handleOk" />
  </div>
</template>

<script>
import EventFlow from "./Event";
import axios from 'axios';
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
import Dia from "./Dia.vue";
export default {
  data() {
    return {
      isShow: false,
      ge: null,
      geState: null
    };
  },
  components: {
    AsyncList,
    Dia,
  },
  mounted() {
    this.gn = gen(1234);
    if (this.geState === null) {
        this.enterNextState();
    }
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
    enterNextState() {
      this.genState = this.gn.next();
      console.log('进入 gen 下一个状态', this.genState);
    },
    handleOk() {
      this.enterNextState();
    },
    handlePageData() {
      // const value = this.gn.next();
      const { done, value } = this.genState;

      if (done) return;
      if (!value || !value.type) return;

      if (value.type === 'QUERY_MODEL') {
        console.log('执行获取数据的逻辑')

        axios.get("http://localhost:3000/posts/1").then(result => {
          console.log('获取到数据: ', result)
          if (result.status === 200) {
            this.enterNextState();
          }
        })
      }
      
      if (value.type === "CONFIRM") {
        this.$refs.diaConfig.open();
      }

    },
    handleInit() {
      console.log('---------->>>');
      this.gn = gen(5678);
    },
  },
};
</script>

<style></style>
