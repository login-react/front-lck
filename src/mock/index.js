/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-22 10:41:39
 * @LastEditTime: 2021-10-22 10:48:40
 * @LastEditors: taimin_zhou
 */

// 引入mockjs
import Mock from "mockjs";
// 引入模板函数类
import ratings from "./modules/ratings";

// Mock函数
const { mock } = Mock;

// 设置延时
Mock.setup({
  timeout: 400,
});

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
mock(/\/api\/ratings\/list/, "post", ratings.list);


export default  ratings