<template>
  <p draggable="true" class="pe-drop-item pe-text-material">
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
  },
};
</script>

<style>
</style>