<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-23 20:06:29
 * @LastEditTime: 2021-10-23 20:54:06
 * @LastEditors: taimin_zhou
-->
<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">{{ cancelButton }}</el-button>
      <el-button type="primary" @click="handleOk">{{
        confireButton
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      title: "",
      cancelButton: "",
      confireButton: "",
    };
  },
  methods: {
    open(value) {
      console.log("==========xsssss===>>>>>>>", value);
      const {
        params: { title, cancelButton, confireButton },
      } = value;
      this.title = title;
      this.cancelButton = cancelButton;
      this.confireButton = confireButton;
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    handleOk() {
      this.$emit("on-ok");
    },
  },
};
</script>

<style></style>
