<template>
  <p
    :pass-style="JSON.stringify(styles)"
    :pass-value="placeholder"
    :pass-class="JSON.stringify(classes)"
    draggable="true"
    :style="inlineStyle"
    :class="`pe-drop-item pe-text-material ${joinedClass}`"
  >
    {{ placeholder }}
  </p>
</template>

<script>
export default {
  props: {
    placeholder: {
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
    if (window) window?.$pe?.reload();
  },
};
</script>

<style>
</style>