export default {
	resize(controller, event) {
		const page = controller.editor.getPage()
		const pRect = page?.getBoundingClientRect()

		// get element rect
		const eRect = event.rect

		// get delta rectangle
		const dRect = event.deltaRect

		// get changes
		const w = (eRect.width / pRect.width) * 100
		const h = (eRect.height / pRect.height) * 100

		// resize
		controller.resize(w, h)

		const l = parseFloat(controller.style.left) || 0
		const t = parseFloat(controller.style.top) || 0

		const dL = (dRect.left / pRect.width) * 100
		const dT = (dRect.top / pRect.height) * 100

		// move
		controller.drag(l + dL, t + dT)
	},
	drag(controller, event) {
		// get page rectangle
		const page = controller.editor.getPage()
		const pRect = page?.getBoundingClientRect()

		// get delta rectangle
		const dx = event.dx
		const dy = event.dy

		const l = parseFloat(controller.style.left) || 0
		const t = parseFloat(controller.style.top) || 0

		const dL = (dx / pRect.width) * 100
		const dT = (dy / pRect.height) * 100

		// move
		controller.drag(l + dL, t + dT)
	},
	rotate: {
		start(controller, event) {
			const active = controller.editor.getActive().root
			const rect = active.getBoundingClientRect()

			const x = rect.left + rect.width / 2
			const y = rect.top + rect.height / 2

			active.setAttribute('data-center-x', x)
			active.setAttribute('data-center-y', y)

			// calc angle
			const a1 = parseFloat(active?.getAttribute('data-angle')) || 0
			const a2 = Math.atan2(y - event.clientY, x - event.clientX)
			const angle = a2 - a1

			active.setAttribute('data-angle', angle)
		},
		move(controller, event) {
			const active = controller.editor.getActive().root

			// find center
			const x = parseFloat(active.getAttribute('data-center-x')) || 0
			const y = parseFloat(active.getAttribute('data-center-y')) || 0

			// calc angle
			const a1 = parseFloat(active.getAttribute('data-angle')) || 0
			const a2 = Math.atan2(y - event.clientY, x - event.clientX)
			const angle = a2 - a1

			controller.rotate(angle)
		},
		end(controller, event) {
			const active = controller.editor.getActive().root
			const rect = active.getBoundingClientRect()

			const x = rect.left + rect.width / 2
			const y = rect.top + rect.height / 2

			active.setAttribute('data-center-x', x)
			active.setAttribute('data-center-y', y)

			// calc angle
			const a1 = parseFloat(active?.getAttribute('data-angle')) || 0
			const a2 = Math.atan2(y - event.clientY, x - event.clientX)
			const angle = a2 - a1

			active.setAttribute('data-angle', angle)

			controller.editor.sync()
		},
	},
}
