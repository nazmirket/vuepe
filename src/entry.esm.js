import {
   Editor,
   ImageMaterial,
   VideoMaterial,
   AudioMaterial,
   TextMaterial,
   PageViewer,
} from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('page-editor', Editor)
   Vue.component('pe-image-material', ImageMaterial)
   Vue.component('pe-video-material', VideoMaterial)
   Vue.component('pe-audio-material', AudioMaterial)
   Vue.component('pe-text-material', TextMaterial)
   Vue.component('pe-page-viewer', PageViewer)
}

export {
   Editor,
   ImageMaterial,
   VideoMaterial,
   AudioMaterial,
   TextMaterial,
   PageViewer,
}
