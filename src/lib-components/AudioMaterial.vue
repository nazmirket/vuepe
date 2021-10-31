<template>
  <audio
    :pass-style="JSON.stringify(styles)"
    :pass-value="src"
    :pass-class="JSON.stringify(classes)"
    ref="audio"
    :src="src"
    draggable="true"
    controls
    :style="inlineStyle"
    :class="`pe-drop-item pe-audio-material ${joinedClass}`"
  />
</template>

<script>
import { reload } from "../js/index";
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    classes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // INLINE STYLE
    inlineStyle() {
      let temp = [];
      for (const k of Object.keys(this.styles || {})) {
        temp.push(`${k}:${this.styles[k]};`);
      }
      return temp.join("");
    },
    // JOINED CLASS VALUE
    joinedClass() {
      return this.classes.join(" ");
    },
  },
  mounted() {
    reload();
  },
};
</script>

<style >
</style>