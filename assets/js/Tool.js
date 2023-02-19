export default class Tool {
	id
	root
	toolbar

	constructor(toolbar, root, id) {
		this.toolbar = toolbar
		this.root = root
		this.id = id
	}

	getActive() {
		const active = this.toolbar.editor.getActive()
		return active
	}

	hide() {
		this.root.style.display = 'none'
	}

	load() {
		const active = this.getActive()

		if (!active) return this.hide()

		const hasTool = active.getToolbarOptions().includes(this.id)

		if (!hasTool) return this.hide()

		this.root.style.display = 'flex'
	}
}
