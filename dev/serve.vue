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
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          :styles="{
            'font-family': 'Courier New',
            color: 'blue',
            'font-size': '2em',
          }"
          :classes="['pe-is-bold']"
        />
      </div>
      <Editor
        id="editor-asdasd"
        v-model="pageContent"
        :width="640"
        :height="640"
        :zoom="100"
      />
    </div>

    {{ pageContent }}
  </div>
</template>

  
<script>
import Vue from "vue";
import {
  Editor,
  Viewer,
  ImageMaterial,
  VideoMaterial,
  AudioMaterial,
  TextMaterial,
} from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    Editor,
    Viewer,
    ImageMaterial,
    VideoMaterial,
    AudioMaterial,
    TextMaterial,
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
</style>

