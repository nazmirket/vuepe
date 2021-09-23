<template>
  <audio
    ref="audio"
    :src="src"
    draggable="true"
    class="pe-drop-item pe-audio-material"
    controls
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
};
</script>

<style >
</style>