/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-22 13:21:34
 * @LastEditTime: 2021-10-23 10:55:21
 * @LastEditors: taimin_zhou
 */

// 页面  查询查询模型集合  查询数据

// 删除当条数据 --> 设置页面数据(传递当前id)  --> 执行模型方法   --> 查询模型集合 --> 结束
import axios from "axios";
class DesignUtils {
  constructor(nodeList, lineList) {
    this.nodeList = nodeList;
    this.lineList = lineList;
    this.dataList = [];
  }

  // 数据转换
  receiveData(data = {}, title, status) {
    console.log("title :>> ", title);
    const { lineList, nodeList } = data;
    const listToTree = (list, nodes) => {
      nodes.map((v) => v.id);
      let notRoots = [];
      const loop = (node) => {
        const fromNodes = list
          .filter((v) => v.from == node.id)
          .map(({ to }) => nodes.find((node) => node.id == to));
        notRoots = new Set([...fromNodes.map((v) => v.id), ...notRoots]);
        return {
          node,
          id: node.id,
          status,
          setTimeout: 9000,
          children: fromNodes.map(loop),
        };
      };
      const r = nodes.map(loop);
      return r.filter((item) => ![...notRoots].includes(item.id));
    };
    const d = listToTree(lineList, nodeList);
    // 赋值
    this.dataList = d;
    return d;
  }

  // 检查流程图是否完整
  isLink() {
    return new Promise((resolve, reject) => {
      const nodeListLen = this.nodeList.length;
      const lineListLen = this.lineList.length;
      if (Number(nodeListLen) - 1 == Number(lineListLen)) {
        resolve({
          status: true,
        });
      } else {
        reject({
          status: false,
          message: "请检查流程图结构是否完整",
        });
      }
    });
  }

  // 获取数据
  get getNodeList() {
    return this.nodeList;
  }

  // 初使化
  init(status) {
    const mapNodes = this.nodeList.map((item) => {
      return {
        ...item,
        status,
      };
    });
    this.nodeList = mapNodes;
  }

  // 更新某一条状态后,继续执行
  updateOnlyStatus(id) {
    console.log("id :>> ", id);
  }

  asyncFun(data, model) {
    console.error(data);
    return new Promise((resolve) => {
      axios.get("http://localhost:3000/posts/1").then(() => {
        if (data.node.openModel) {
          model("打开窗口！").then(() => {
            resolve(888);
          });
        } else {
          resolve(888);
        }
      });
    });
  }

  // 流程执行
  flowFunRun(data, model) {
    if (!(data && data[0])) {
      return;
    }
    const defaultCondition = () => true;
    const conditionTrueData = data.find((v) => {
      return v.status || defaultCondition;
    });
    // this.asyncFun(conditionTrueData)
    this.asyncFun(data[0], model)
      .then((response) => {
        console.log("response :>> ", response);
        console.log("conditionTrueData.name :>> ", conditionTrueData.node);
        const type = conditionTrueData.node.type;
        switch (type) {
          case "CONFIRM":
            this.openModel();
            break;
          default:
            break;
        }
        this.flowFunRun(conditionTrueData.children, model);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }

  openModel() {
    console.log("====>>>>>>open the model");
  }
}

export default DesignUtils;
