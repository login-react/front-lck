/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-23 16:44:21
 * @LastEditTime: 2021-10-23 18:16:01
 * @LastEditors: taimin_zhou
 */

const runQueryModel = (a) => {
  setTimeout(() => {
    console.log("a :>> ", a);
    // let data = "查询模型集合";
    // g1.next(data);
  }, 2000);
};

const openModel = (a) => {
  setTimeout(() => {
    console.log("a :>> ", a);
    // let data = "查询模型集合";
    // g1.next(data);
  }, 2000);
};

const findEventFlow = (a) => {
  setTimeout(() => {
    console.log("a :>> ", a);
    let data = "查询模型集合";
    g1.next(data);
  }, 2000);
};
function getOrders() {
  setTimeout(() => {
    let data = "打开模态框";
    g1.next(data);
  }, 2000);
}
function getGoods() {
  setTimeout(() => {
    let data = "结束";
    g1.next(data);
  }, 2000);
}

function* gen() {
  let user = yield findEventFlow();
  console.log(user);
  let order = yield getOrders(user);
  console.log(order);
  let good = yield getGoods(order);
  console.log(good);
}
let g1 = gen();
console.log("******", g1.next());
const initData = (nodeList) => {
  for (let item of nodeList) {
    switch (item.type) {
      case "QUERY_MODEL":
        // 查询模型
        runQueryModel(item.params);
        break;
      case "CONFIRM":
        // 打开弹窗
        openModel(2);
        break;
      case "FINISH":
        // 结束
        findEventFlow(4);
        break;
      default:
        break;
    }
  }
};
export { initData };
