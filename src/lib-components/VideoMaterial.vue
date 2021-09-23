<template>
  <video
    ref="video"
    :src="src"
    draggable="true"
    class="pe-drop-item pe-video-material"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  mounted() {
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
  },
};
</script>

<style >
</style>