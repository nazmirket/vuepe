import Component from './Component'
import ToolMaps from './ToolMaps'

export default class TextComponent extends Component {
	constructor(editor, style, props, cid) {
		super(editor, style, props, 'text', cid)
	}

	create() {
		const wrapper = document.createElement('div')
		wrapper.classList.add('pe-element', 'pe-is-element-text')

		const element = document.createElement('p')
		element.innerText = this.props.content
		element.classList.add('pe-item')

		wrapper.appendChild(element)

		return wrapper.cloneNode(true)
	}

	getControllerOptions() {
		return ToolMaps.text.controller
	}

	// get toolbar options
	getToolbarOptions() {
		return ToolMaps.text.toolbar
	}
}
