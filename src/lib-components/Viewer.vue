<template>
  <div
    ref="peviewer"
    :class="['pe-viewer', `pe-size-${viewport.w}x${viewport.h}`]"
    :style="{ width: `${sW}px !important`, height: `${sH}px !important` }"
  >
    <div class="pe-page" :style="{ transform: `scale(${ratio}) !important` }" />
  </div>
</template>

<script>
import Viewer from "../js/Viewer";
export default {
  props: {
    page: {
      components: {
        type: Array,
        default: () => [],
      },
      style: {
        type: Object,
        default: () => {},
      },
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      viewer: null,
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
        const wRatio = maxW / w || 0;
        const hRatio = maxH / h || 0;

        ratio = Math.min(wRatio, hRatio);
      }

      // return ratio
      return ratio;
    },
    sH() {
      const { h } = this.viewport;
      return this.ratio * h;
    },
    sW() {
      const { w } = this.viewport;
      return this.ratio * w;
    },
    viewport() {
      return { ...this.defaults.viewport, ...this.options.viewport };
    },
  },
  watch: {
    page() {
      if (this.viewer) {
        this.viewer.clear();
        this.viewer.render([...this.page.components], this.page.style);
      }
    },
  },
  mounted() {
    const root = this.$refs.peviewer;
    this.viewer = new Viewer({ root: root });
    this.viewer.clear();
    this.viewer.render([...this.page.components], this.page.style);
  },
};
</script>

<style></style>
