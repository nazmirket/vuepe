import View from './View'

export default class TextView extends View {
	constructor(viewer, style, props) {
		super(viewer, style, props, 'text')
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
}
