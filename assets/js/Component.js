import ComponentStyle from './ComponentStyle'

export default class Component {
	// root element
	type
	cid
	root
	editor

	props = {}

	//style
	style

	handlers = {
		// click listeners
		click: function (event) {
			event.stopPropagation()
			this.editor.setActive(this.cid)
		}.bind(this),
	}

	// constructor
	constructor(editor, style, props, type, cid) {
		this.cid = cid
		this.editor = editor
		this.style = new ComponentStyle(style)
		this.props = { ...props }
		this.type = type
	}

	// init function
	init() {
		this.root = this.create()
		this.root.setAttribute('id', this.cid)

		const page = this.editor.getPage()
		page.appendChild(this.root)

		this.setClick()

		this.reload()
	}

	// set click
	setClick() {
		this.root.addEventListener('click', this.handlers.click)
	}

	// reload function
	reload() {
		this.root.style = this.style.toString()
	}

	// remove
	remove() {
		this.root.remove()
	}

	setStatus() {}
}
