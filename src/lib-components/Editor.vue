<template>
  <div
    ref="peditor"
    :class="['pe-editor', `pe-size-${width}x${height}`, `pe-zoom-${zoom}`]"
  >
    <Toolbar />
    <!--CONTENT-->
    <div class="pe-content">
      <!--PAGE WRAPPER-->
      <div
        class="pe-page-wrapper"
        :style="{ width: `${sW}px`, height: `${sH}px` }"
      >
        <div class="pe-page">
          <Controller />
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import Controller from "./Controller.vue";
import Editor from "../js/Editor";
export default {
  model: {
    prop: "page",
    event: "change",
  },
  components: {
    Toolbar,
    Controller,
  },
  data() {
    return {
      editor: null,
    };
  },
  props: {
    page: {
      components: { type: Array, default: [] },
      configs: { type: Object, default: {} },
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    zoom: {
      type: Number,
      default: 100, // 10 to 200
    },
  },
  computed: {
    ratio() {
      return (this.zoom || 100) / 100;
    },
    sH() {
      return this.ratio * this.height;
    },
    sW() {
      return this.ratio * this.width;
    },
  },
  mounted() {
    const root = this.$refs.peditor;
    this.editor = new Editor({ root: root, onChange: this.onChange });
    this.editor.load([...this.page.components], this.page.configs);
  },
  methods: {
    onChange(components, configs) {
      this.$emit("change", { components, configs });
    },
  },
};
</script>

<style></style>
