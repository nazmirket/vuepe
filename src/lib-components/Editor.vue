<template>
  <div
    ref="peditor"
    :class="['pe-editor', `pe-size-${width}x${height}`, `pe-zoom-${zoom}`]"
  >
    <Toolbar />
    <!--CONTENT-->
    <div class="pe-content">
      <!--PAGE WRAPPER-->
      <div
        class="pe-page-wrapper"
        :style="{ width: `${scaledW}px`, height: `${scaledH}px` }"
      >
        <div class="pe-page">
          <Controller />
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import Controller from "./Controller.vue";
import Editor from "../js/Editor";
export default {
  components: {
    Toolbar,
    Controller,
  },
  props: {
    components: {
      type: Array,
      default: [],
    },
    configs: {
      type: Object,
      default: {},
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    zoom: {
      type: Number,
      default: 100, // 10 to 200
    },
  },
  computed: {
    ratio() {
      return (this.zoom || 100) / 100;
    },
    scaledH() {
      return this.ratio * this.height;
    },
    scaledW() {
      return this.ratio * this.width;
    },
  },
  mounted() {
    const root = this.$refs.peditor;
    new Editor(
      {
        root: root,
        onChange: function () {
          console.log("change detected...");
        },
      },
      [
        ...this.components,
        // {
        //   type: "image",
        //   props: {
        //     src: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
        //   },
        //   style: {
        //     z: 0,
        //     width: "40%",
        //     height: "auto",
        //   },
        // },
        // {
        //   type: "image",
        //   props: {
        //     src: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
        //   },
        //   style: {
        //     z: 5,
        //     width: "40%",
        //     height: "auto",
        //   },
        // },
        // {
        //   type: "text",
        //   props: {
        //     content:
        //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //   },
        //   style: {
        //     z: 10,
        //     width: "40%",
        //     height: "auto",
        //   },
        // },
        {
          type: "audio",
          props: {
            src: "https://download.samplelib.com/mp3/sample-3s.mp3",
          },
          style: {},
        },
      ],
      this.configs
    );
  },
};
</script>

<style>
.pe-editor {
  height: unset !important;
}
</style>
