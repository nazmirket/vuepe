<template>
  <div id="app">
    <Editor />
  </div>
</template>

  
<script>
import Vue from "vue";
import { Editor, Viewer } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Editor,
    Viewer,
  },
});
</script>


<style>
</style>

