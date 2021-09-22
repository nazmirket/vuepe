<template>
  <video :src="src" draggable="true" class="pe-drop-item pe-video-material" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>