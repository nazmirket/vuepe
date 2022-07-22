<template>
  <div id="app" class="pe-root">
    <Editor
      :components="components"
      :configs="configs"
      :width="600"
      :height="800"
      :zoom="100"
    />
  </div>
</template>

  
<script>
import Vue from "vue";
import { Editor, PageViewer } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: { Editor, PageViewer },
  data() {
    return {
      components: [],
      configs: {},
    };
  },
});
</script>


<style>
@import url("../src/scss/editor.css");

.pe-root {
  display: flex;
  min-height: 100vh;
}

body {
  margin: 10px;
  min-height: 100vh;
}
</style>

