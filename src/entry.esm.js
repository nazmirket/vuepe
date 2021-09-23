import {
   Editor,
   Viewer,
   ImageMaterial,
   VideoMaterial,
   AudioMaterial,
   TextMaterial,
} from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('page-editor', Editor)
   Vue.component('page-viewer', Viewer)
   Vue.component('pe-image-material', ImageMaterial)
   Vue.component('pe-video-material', VideoMaterial)
   Vue.component('pe-audio-material', AudioMaterial)
   Vue.component('pe-text-material', TextMaterial)
}

export {
   Editor,
   Viewer,
   ImageMaterial,
   VideoMaterial,
   AudioMaterial,
   TextMaterial,
}
