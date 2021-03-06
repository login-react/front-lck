/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-22 10:43:04
 * @LastEditTime: 2021-10-22 10:43:04
 * @LastEditors: taimin_zhou
 */
// 引入随机函数
import { Random } from "mockjs";
// 引入Mock
const Mock = require("mockjs");

// 定义数据
const listData = Mock.mock({
  "data|20": [
    {
      username: () => Random.cname(),
      time: () => Random.date("yyyy.M.d"),
      content: () => Random.csentence(5, 10),
    },
  ],
});

function list() {
  // res是一个请求对象，包含: url, type, body
  return {
    code: 200,
    data: listData.data,
    message: "请求成功",
  };
}

export default { list };
