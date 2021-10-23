<!--
 * @Description: 
 * @Author: taimin_zhou
 * @Date: 2021-10-23 20:06:29
 * @LastEditTime: 2021-10-23 20:09:23
 * @LastEditors: taimin_zhou
-->
<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style></style>
