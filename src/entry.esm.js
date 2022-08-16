import Editor from './Editor'
import Viewer from './Viewer'

export default function install(Vue) {
   Vue.component('pe-editor', Editor)
   Vue.component('pe-viewer', Viewer)
}

export { Editor, Viewer }
