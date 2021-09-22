import {
   Editor,
   Viewer,
   ImageMaterial,
   VideoMaterial,
} from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('page-editor', Editor)
   Vue.component('page-viewer', Viewer)
   Vue.component('pe-image-material', ImageMaterial)
   Vue.component('pe-video-material', VideoMaterial)
}

export { Editor, Viewer, ImageMaterial, VideoMaterial }
