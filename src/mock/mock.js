/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-22 10:50:03
 * @LastEditTime: 2021-10-22 10:52:15
 * @LastEditors: taimin_zhou
 */
var Mock = require("mockjs");
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});
console.log('data :>> ', data);