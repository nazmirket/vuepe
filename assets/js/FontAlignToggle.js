import Tool from './Tool.js'
import Icons from './Icons'

export default class FontAlignToggle extends Tool {
	// input button
	button
	selected
	states = [
		{ no: 0, value: 'left', icon: Icons.AlignLeftIcon },
		{ no: 1, value: 'center', icon: Icons.AlignCenterIcon },
		{ no: 2, value: 'right', icon: Icons.AlignRightIcon },
	]

	constructor(toolbar) {
		const root = toolbar.root.querySelector('.pe-change-align')
		super(toolbar, root, 'ti009')

		this.button = this.root.querySelector('button')

		// register event listener
		this.button.addEventListener('click', this.handlers.click)
	}

	handlers = {
		click: function () {
			this.change()
			this.load()
			this.toolbar.editor.sync()
		}.bind(this),
	}

	load() {
		super.load()

		const active = this.getActive()
		this.selected = this.states.find(s => s.value === active.style.font.align)

		this.button.querySelector('img').src = this.selected.icon
	}

	change() {
		const active = this.getActive()
		const next = this.states.find(s => s.no === (this.selected.no + 1) % 3)
		active.style.setFont({ align: next?.value })
		active.reload()
	}
}
