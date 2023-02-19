import Tool from './Tool.js'

export default class FontWeightToggle extends Tool {
	// input button
	button
	isBold

	constructor(toolbar) {
		const root = toolbar.root.querySelector('.pe-toggle-bold')
		super(toolbar, root, 'ti010')

		this.button = this.root.querySelector('button')

		// register event listener
		this.button.addEventListener('click', this.handlers.click)
	}

	handlers = {
		click: function () {
			this.toggle()
			this.load()
			this.toolbar.editor.sync()
		}.bind(this),
	}

	load() {
		super.load()

		const active = this.getActive()
		this.isBold = active.style.font.weight === 'bold'

		if (this.isBold) this.button.classList.add('pe-is-active')
		else this.button.classList.remove('pe-is-active')
	}

	toggle() {
		const active = this.getActive()
		active.style.setFont({ weight: this.isBold ? 'normal' : 'bold' })
		active.reload()
	}
}
