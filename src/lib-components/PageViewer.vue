<template>
  <div :class="`pe-preview ${cls} pe-size-${options.w}x${options.h}`">
    <div v-html="style" />
    <div class="pe-page-wrapper" v-html="page" />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
    opts: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      defaultOpts: {
        w: 0,
        h: 0,
        maxW: 0,
        maxH: 0,
        fixedH: 0,
        fixedW: 0,
      },
    };
  },
  computed: {
    cls() {
      const suffix = parseInt(this.ratio * 100);
      return `pe-preview-wrapper-${suffix}`;
    },
    ratio() {
      const { w, h, maxW, maxH, fixedH, fixedW } = this.options;
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
    style() {
      const { w, h } = this.options;
      // return style
      return `
      <style>
        .${this.cls} {
            width:${this.ratio * w}px;
            height:${this.ratio * h}px
        }
        .${this.cls} .pe-page-wrapper {
            width:${this.ratio * w}px;
            height:${this.ratio * h}px
        }
        .${this.cls} .pe-page{
            transform:scale(${this.ratio});
        }
      </style>
      `;
    },
    options() {
      return { ...this.defaultOpts, ...this.opts };
    },
  },
};
</script>

<style></style>
