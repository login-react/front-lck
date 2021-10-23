<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-21 11:37:55
 * @LastEditTime: 2021-10-23 10:31:53
 * @LastEditors: Please set LastEditors
-->
<template>
  <div>
    <el-button @click="handlePageData">线是否连接</el-button>
    <div @click="handleClickRun">点击运行</div>
  </div>
</template>

<script>
import EventFlow from "./Event"
import { flowList } from "./Flow"
import DesignUtils from "./Design"
const designUtils = new DesignUtils(flowList.nodeList, flowList.lineList)
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleClickRun() {
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
      ]
      const eventFlow = new EventFlow()
      eventFlow.runFlow(list)
    },
    handlePageData() {
      // designUtils
      //   .isLink(flowList.nodeList, flowList.lineList)
      //   .then((data) => {
      //     this.$message({
      //       message: data,
      //       type: "success",
      //     });
      //   })
      //   .catch((err) => {
      //     this.$message.error({
      //       message: err.message,
      //       duration: 1000,
      //     });
      //   });

      // designUtils.init(false);

      const result = designUtils.receiveData(flowList, "", false)
      // console.log("result :>> ", result);
      // designUtils.updateOnlyStatus("1b0amr5is")
      designUtils.flowFunRun(result, this.$confirm)
    },
  },
}
</script>

<style></style>
