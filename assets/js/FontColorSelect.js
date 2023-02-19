import Tool from './Tool.js'

export default class TextColorSelect extends Tool {
	// input color picker
	indicator
	picker
	value

	constructor(toolbar) {
		const root = toolbar.root.querySelector('.pe-change-color')
		super(toolbar, root, 'ti008')

		this.picker = this.root.querySelector('input')

		// register event listener
		this.picker.addEventListener('change', this.handlers.change)

		this.indicator = this.root.querySelector('.pe-color-indicator')
	}

	handlers = {
		change: function (event) {
			const value = event.target.value
			this.set(value)
			this.toolbar.editor.sync()
		}.bind(this),
	}

	load() {
		super.load()
		const active = this.getActive()
		this.value = active.style.color
		this.refresh()
	}

	refresh() {
		this.picker.value = this.value || '#000000'
		this.indicator.style.background = this.value
	}

	set(value) {
		const active = this.getActive()
		active.style.color = value
		this.value = value
		active.reload()
		this.refresh()
	}
}
