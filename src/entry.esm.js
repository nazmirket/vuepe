import { Editor, Viewer } from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('page-editor', Editor)
   Vue.component('page-viewer', Viewer)
}

export { Editor, Viewer }
