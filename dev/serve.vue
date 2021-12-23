<template>
  <div id="app">
    <div class="inline">
      <div class="materials">
        <p>Örnek Resim</p>
        <ImageMaterial
          src="https://www.amongusavatarcreator.com/assets/img/characters/600/red.png"
        />

        <p>Örnek Video</p>
        <VideoMaterial
          src="https://cdn.videvo.net/videvo_files/video/free/2016-01/large_watermarked/Forest_15_4_Videvo_preview.mp4"
        />

        <p>Örnek Ses</p>
        <AudioMaterial
          src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        />

        <p>Örnek Yazı</p>
        <TextMaterial
          placeholder="Lorem ipsum is simply dummy"
          :styles="{
            color: 'blue',
            'font-size': '2em',
          }"
          :classes="['pe-is-bold']"
        />
      </div>
      <Editor
        id="editor-asdasd"
        v-model="pageContent"
        :width="800"
        :height="600"
        :zoom="100"
      />
    </div>

    <div class="sub">
      <PageViewer :page="pageContent" :opts="{ w: 800, h: 600, maxH: 220 }" />
    </div>
  </div>
</template>

  
<script>
import Vue from "vue";
import {
  Editor,
  ImageMaterial,
  VideoMaterial,
  AudioMaterial,
  TextMaterial,
  PageViewer,
} from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Editor,
    ImageMaterial,
    VideoMaterial,
    AudioMaterial,
    TextMaterial,
    PageViewer,
  },
  data() {
    return {
      pageContent: null,
    };
  },
});
</script>


<style>
@import url("../src/scss/editor.css");
body {
  font-family: sans-serif;
}
.inline {
  display: flex;
  width: 100%;
  height: 800px;
}
.materials {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 250px;
  height: 100%;
}
.pe-image-material {
  margin: 10px;
  width: auto;
}

.pe-video-material {
  margin: 10px;
  width: auto;
}

.sub {
  padding: 5px;
  border: 1px solid red;
  margin-top: 10px;
  height: 230px;
  width: 300px;
}
</style>

