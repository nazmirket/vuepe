import CustomSelectBox from './CustomSelectBox'
import Tool from './Tool.js'

export default class FontSizeSelect extends Tool {
	// input select
	select

	constructor(toolbar) {
		const root = toolbar.root.querySelector('.pe-change-font-size')
		super(toolbar, root, 'ti007')

		this.select = new CustomSelectBox(
			this.root.querySelector('.pe-selector'),
			this.handlers.change
		)

		this.setOptions()
	}

	handlers = {
		change: function (value) {
			this.setSize(parseInt(value))
			this.load()
			this.toolbar.editor.sync()
		}.bind(this),
	}

	load() {
		super.load()
		const active = this.getActive()
		this.select.set(parseInt(active.style.font.size))
	}

	setSize(value) {
		const active = this.getActive()
		active.style.setFont({ size: value })
		active.reload()
	}

	setOptions() {
		const sizes = Array.from(Array(61))
			.fill(10)
			.map((b, i) => b + i * 2)

		this.select.setOptions(sizes.map(i => ({ value: i, style: '' })))
	}
}
