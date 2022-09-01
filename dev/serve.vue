<template>
  <div id="app" class="outer">
    <Editor
      v-model="page"
      :width="viewport.w"
      :height="viewport.h"
      :zoom="100"
      pageId="asdasdasdasdasdasdsa"
    />

    <Viewer :page="page" :options="{ viewport }" :interactive="true" />
  </div>
</template>

  
<script>
import Vue from "vue";
import { Editor, Viewer } from "../src/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: { Editor, Viewer },
  data() {
    return {
      viewport: {
        w: 600,
        h: 800,
        maxH: 400,
        maxW: 400,
      },
      page: {
        components: [
          {
            id: "qw9e8q89we89qwe89",
            type: "text",
            props: {
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            style: {
              z: 10,
              width: 40,
              height: 20,
              color: "#000000",
              font: {
                family: "Roboto",
              },
            },
          },
          {
            id: "qw9e8q89we89qweasdsad89",
            type: "audio",
            props: {
              src: "https://download.samplelib.com/mp3/sample-3s.mp3",
            },
            style: {
              width: 8,
              height: 8,
            },
          },
        ],
        style: {},
      },
    };
  },
  mounted() {
    setTimeout(
      function () {
        this.page = {
          components: [
            {
              id: "ldoıqwnodnuıasdhjkjasd",
              type: "image",
              props: {
                src: "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
              },
              style: {
                z: 5,
                width: 30,
                height: 15,
              },
            },
            {
              id: "qw9e8q89we89qweasdsad89",
              type: "audio",
              props: {
                src: "https://download.samplelib.com/mp3/sample-3s.mp3",
              },
              style: {
                width: 8,
                height: 8,
              },
            },
          ],
          style: {},
        };
      }.bind(this),
      2000
    );
  },
  methods: {
    onChange() {
      console.log("change ....");
    },
  },
});
</script>


<style>
@import url("../src/scss/vuepe.css");

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

