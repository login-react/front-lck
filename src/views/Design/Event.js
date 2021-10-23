/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-22 09:11:57
 * @LastEditTime: 2021-10-22 11:14:33
 * @LastEditors: taimin_zhou
 */
import axios from "axios";
class EventFlow {
  constructor(name, age, events) {
    this.name = name;
    this.age = age;
    this.events = events;
  }

  get getEvents() {
    return this.events;
  }

  get defaultCondition() {
    return true;
  }

  asyncFun() {
    return new Promise((resolve) => {
      axios
        .get("http://localhost:3000/posts/1")
        .then((response) => {
          // console.log("response :>> ", response);
          resolve(response.data.title);
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    });
  }

  flowFun(data) {
    if (!(data && data[0])) {
      return;
    }
    const conditionTrueData = data.find(
      (v) => v.condition || this.defaultCondition
    );

    this.asyncFun(conditionTrueData)
      .then((data) => {
        console.log("data =====>>>>>>>>:>> ", data);
        // console.log("conditionTrueData.name :>> ", conditionTrueData);
        this.setPageData()
        this.flowFun(conditionTrueData.children);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }

  setPageData() {
    console.log("------>>>>>> set page data");
  }

  runFlow(data) {
    this.flowFun(data);
  }
}

export default EventFlow;
