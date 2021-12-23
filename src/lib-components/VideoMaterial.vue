<template>
  <video
    :pass-style="JSON.stringify(styles)"
    :pass-value="src"
    :pass-class="JSON.stringify(classes)"
    ref="video"
    :src="src"
    draggable="true"
    :style="inlineStyle"
    :class="`pe-drop-item pe-video-material ${joinedClass}`"
  />
</template>

<script>
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
    // add play action on hover
    const video = this.$refs.video;
    video.addEventListener("mouseover", function (event) {
      const v = event.target;
      v.currentTime = 0;
      v.play();
    });
    video.addEventListener("mouseleave", function (event) {
      const v = event.target;
      v.pause();
      v.currentTime = 0;
    });

    // reload page
    if (window) window?.$pe?.reload();
  },
};
</script>

<style >
</style>