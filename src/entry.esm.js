import { Editor, PageViewer } from '@/lib-components/index'

export default function install(Vue) {
   Vue.component('page-editor', Editor)
   Vue.component('pe-page-viewer', PageViewer)
}

export { Editor, PageViewer }
