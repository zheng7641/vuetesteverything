<template>
  <div>
    <div id="app">
      <el-button @click="visible = true">Button</el-button>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
      </el-dialog>
    </div>
  </div>
</template>
   
<script>
export default {
  name: "globle",
};
</script>