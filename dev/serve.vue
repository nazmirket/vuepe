<template>
  <div id="app" class="outer">
    <Editor v-model="page" :width="600" :height="800" :zoom="100" />

    <Viewer
      :page="page"
      :options="{
        viewport: { w: 600, h: 800, maxH: 200, maxW: 240 },
      }"
    />
  </div>
</template>

  
<script>
import Vue from "vue";
import { Editor, Viewer } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: { Editor, Viewer },
  data() {
    return {
      page: {
        components: [
          {
            type: "image",
            props: {
              src: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
            },
            style: {
              z: 0,
              width: 30,
              height: 15,
            },
          },
          // {
          //   type: "image",
          //   props: {
          //     src: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
          //   },
          //   style: {
          //     z: 5,
          //     width: 30,
          //   },
          // },
          // {
          //   id: "asdasdasdasd",
          //   type: "text",
          //   props: {
          //     content:
          //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          //   },
          //   style: {
          //     z: 10,
          //     width: 40,
          //   },
          // },
          // {
          //   type: "audio",
          //   props: {
          //     src: "https://download.samplelib.com/mp3/sample-3s.mp3",
          //   },
          //   style: {},
          // },
        ],
        configs: {},
      },
    };
  },
});
</script>


<style>
@import url("../src/scss/pe.css");

body,
html {
  margin: 10px;
  min-height: 100vh;
}

.outer {
  display: grid;
  min-height: 100vh;
}
</style>

