/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-23 13:42:48
 * @LastEditTime: 2021-10-23 13:45:23
 * @LastEditors: taimin_zhou
 */
const nodeList = [
  {
    id: "1b0amr5is",
    name: "查询模型集合",
    type: "QUERY_MODEL",
    left: "132px",
    top: "40px",
    ico: "el-icon-time",
    state: "success",
    params: {
      model: "",
      page: 1,
      pageSize: 10,
      condition: {
        title: "张三",
      },
    },
  },
  {
    id: "70f2xw9tzh",
    name: "提示框",
    openModel: true,
    type: "CONFIRM",
    left: "137px",
    top: "165px",
    ico: "el-icon-odometer",
    state: "success",
    params: {
      title: "删除",
      content: "是否删除 {name}",
      confireButton: "删除",
      cancelButton: "取消",
    },
  },
  {
    id: "wbtqnb7h2a",
    name: "结束",
    type: "FINISH",
    left: "179px",
    top: "258px",
    ico: "el-icon-odometer",
    state: "success",
  },
];
console.log('nodeList :>> ', nodeList);
