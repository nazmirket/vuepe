import { Editor, Viewer } from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('pe-editor', Editor)
   Vue.component('pe-viewer', Viewer)
}

export { Editor, Viewer }
