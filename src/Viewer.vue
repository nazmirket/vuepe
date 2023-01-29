<template>
  <div
    ref="peviewer"
    :class="['pe-viewer', `pe-size-${viewport.w}x${viewport.h}`]"
  >
    <div ref="pepage" class="pe-page" />
  </div>
</template>

<script>
import Viewer from "./js/Viewer";
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
        const wRatio = maxW / w || 1;
        const hRatio = maxH / h || 1;

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
  methods: {
    refresh() {
      this.$refs.peviewer.style.width = this.sW + "px";
      this.$refs.peviewer.style.height = this.sH + "px";
      this.$refs.pepage.style.transform = "scale(" + this.ratio + ")";
    },
  },
  watch: {
    viewport() {
      this.refresh();
    },
    page() {
      if (this.viewer) {
        this.viewer.clear();
        this.viewer.render(
          [...(this.page?.components || [])],
          this.page?.style || {}
        );
        this.refresh();
      }
    },
  },
  mounted() {
    const root = this.$refs.peviewer;
    this.viewer = new Viewer({ root: root });
    this.viewer.clear();
    this.viewer.render(
      [...(this.page?.components || [])],
      this.page?.style || {}
    );
    this.refresh();
  },
};
</script>

<style></style>
