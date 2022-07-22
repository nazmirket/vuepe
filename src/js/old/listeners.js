import {
   replaceTranslate,
   replaceRotate,
   getDragAngle,
   getEditor,
} from './helpers.js'

// DRAG LISTENER
export const dragListeners = {
   move: function (event) {
      const editor = getEditor(event.target)
      const controller = editor.querySelector('.pe-controller')
      const target = editor.querySelector('.pe-element.pe-is-active')

      drag(event, controller)
      drag(event, target)
   },
   end: function (event) {
      const editor = getEditor(event.target)
      markState(editor)
   },
}

// RESIZE LISTENER
export const resizeListeners = {
   move: function (event) {
      const editor = getEditor(event.target)
      const controller = editor.querySelector('.pe-controller')
      const target = editor.querySelector('.pe-element.pe-is-active')

      resize(event, controller)
      resize(event, target)
   },
   end: function (event) {
      const editor = getEditor(event.target)
      markState(editor)
   },
}

// ROTATE LISTENER
export const rotateListeners = {
   onstart: function (event) {
      const editor = getEditor(event.target)
      const target = editor.querySelector('.pe-element.pe-is-active .pe-item')

      const rect = target?.getBoundingClientRect()

      if (rect) {
         target.setAttribute('data-center-x', rect.left + rect.width / 2)
         target.setAttribute('data-center-y', rect.top + rect.height / 2)
         target.setAttribute('data-angle', getDragAngle(event, target))
      }
   },
   onmove: function (event) {
      const editor = getEditor(event.target)
      const target = editor.querySelector('.pe-element.pe-is-active .pe-item')
      const angle = getDragAngle(event, target)
      rotate(angle, target)
   },
   onend: function (event) {
      const editor = getEditor(event.target)
      const target = editor.querySelector('.pe-element.pe-is-active .pe-item')
      const angle = getDragAngle(event, target)
      target.setAttribute('data-angle', angle)
      // mark state
      markState(editor)
   },
}

// DRAG ELEMENT
function drag(event, target) {
   // get page rectangle
   const editor = getEditor(event.target)
   const page = editor?.querySelector('.pe-page')
   const pageRect = page?.getBoundingClientRect()

   if (!pageRect) return

   // previous position
   let left = parseFloat(target?.getAttribute('data-left')) || 0
   let top = parseFloat(target?.getAttribute('data-top')) || 0

   // find position
   left += (event.dx / pageRect.width) * 100
   top += (event.dy / pageRect.height) * 100

   // move
   target.style.left = `${left}%`
   target.style.top = `${top}%`

   // update data-x data-y
   target.setAttribute('data-left', left)
   target.setAttribute('data-top', top)
}

// RESIZE ELEMENT
function resize(event, target) {
   // get page rectangle
   const editor = getEditor(event.target)
   const page = editor?.querySelector('.pe-page')
   const pageRect = page?.getBoundingClientRect()

   if (!pageRect) return

   // get element rect
   const elRect = event.rect

   // get delta rectangle
   const deltaRect = event.deltaRect

   // get changes
   const W = (elRect.width / pageRect.width) * 100
   const H = (elRect.height / pageRect.height) * 100

   // set size
   target.style.width = `${W}%`
   target.style.height = `${H}%`

   // get position
   let left = parseFloat(target?.getAttribute('data-left')) || 0
   let top = parseFloat(target?.getAttribute('data-top')) || 0

   // move
   left += (deltaRect.left / pageRect.width) * 100
   top += (deltaRect.top / pageRect.height) * 100

   target.style.left = `${left}%`
   target.style.top = `${top}%`

   // set data-x data-y
   target.setAttribute('data-left', left)
   target.setAttribute('data-top', top)
}

// ROTATE ELEMENT
function rotate(angle, target) {
   // find position
   let x = parseFloat(target?.getAttribute('data-x')) || 0
   let y = parseFloat(target?.getAttribute('data-y')) || 0

   // rotate
   target.style.transform = replaceRotate(
      replaceTranslate(target.style.transform, x, y),
      angle
   )
}
