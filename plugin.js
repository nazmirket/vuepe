import Editor from './components/Editor'
import Viewer from './components/Viewer'

export default {
	install(Vue) {
		Vue.component('PeEditor', Editor)
		Vue.component('PeViewer', Viewer)
	},
	Editor: Editor,
	Viewer: Viewer,
}
