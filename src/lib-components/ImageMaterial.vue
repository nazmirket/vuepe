<template>
  <img draggable="true" :src="src" class="pe-drop-item pe-image-material" />
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