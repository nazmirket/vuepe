<template>
  <div
    ref="peviewer"
    :class="['pe-viewer', `pe-size-${viewport.w}x${viewport.h}`]"
    :style="{
      width: `${scaledW}px !important`,
      height: `${scaledH}px !important`,
    }"
  >
    <div
      class="pe-page-wrapper"
      :style="{
        width: `${scaledW}px !important`,
        height: `${scaledH}px !important`,
      }"
    >
      <div
        class="pe-page"
        :style="{
          transform: `transform:scale(${ratio}) !important;`,
        }"
      />
    </div>
  </div>
</template>

<script>
import Viewer from "../js/Viewer";
export default {
  props: {
    components: {
      type: Array,
      default: [],
    },
    configs: {
      type: Object,
      default: {},
    },
    options: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      defaults: {
        viewport: {
          w: 0,
          h: 0,
          maxW: 0,
          maxH: 0,
          fixedH: 0,
          fixedW: 0,
        },
      },
    };
  },
  computed: {
    ratio() {
      const { w, h, maxW, maxH, fixedH, fixedW } = this.viewport;
      // init ratio
      let ratio = 1;

      // if fixed
      if (fixedW > 0) ratio = fixedW / w;
      if (fixedH > 0) ratio = fixedH / h;

      // if not fixed
      if (maxW || maxH) {
        const wRatio = maxW / w || 1;
        const hRatio = maxH / h || 1;

        ratio = Math.min(wRatio, hRatio);
      }

      // return ratio
      return ratio;
    },
    scaledH() {
      const { h } = this.viewport;
      return this.ratio * h;
    },
    scaledW() {
      const { w } = this.viewport;
      return this.ratio * w;
    },
    viewport() {
      return { ...this.defaults.viewport, ...this.options.viewport };
    },
  },
  mounted() {
    const root = this.$refs.peviewer;
    new Viewer({ root: root }, [...this.components], this.configs);
  },
};
</script>

<style></style>
