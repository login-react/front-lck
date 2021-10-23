/*
 * @Description:
 * @Author: taimin_zhou
 * @Date: 2021-10-23 18:39:13
 * @LastEditTime: 2021-10-23 21:18:46
 * @LastEditors: taimin_zhou
 */
function* gen(params) {
  for (let index = 0; index < params.length; index++) {
    const element = params[index];
    yield element;
  }
}

export { gen };
