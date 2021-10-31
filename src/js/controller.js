import {
   copyAttribute,
   queryParent,
   getEditor,
   resolveType,
} from './helpers.js'
import { markState } from './history.js'
import { hideAll as hideToolbar } from './toolbar.js'

const options = {
   image: {
      thumbs: true,
      rotate: true,
   },
   text: {
      thumbs: true,
      rotate: true,
   },
   audio: {
      thumbs: false,
      rotate: false,
   },
   video: {
      thumbs: true,
      rotate: false,
   },
}

export function locate(editor) {
   // find element
   const el = editor.querySelector('.pe-element.pe-is-active')
   if (!el) {
      return
   }

   // get type
   const type = resolveType(el)

   // find controller
   const controller = editor.querySelector('.pe-controller')

   // resolve options
   const { thumbs, rotate = false } = options[type]

   // set delete
   editor.querySelector('.pe-delete-handle').style.display = 'unset'

   // set rotate
   editor.querySelector('.pe-rotate-handle').style.display = rotate
      ? 'unset'
      : 'none'

   // set thumbs
   if (thumbs) {
      controller.classList.add('pe-is-resizable')
   } else {
      controller.classList.remove('pe-is-resizable')
   }

   // get rect
   const rect = el.getBoundingClientRect()

   // activate
   controller.classList.add('pe-is-active')
   controller.style['z-index'] = 99999999

   // copy style
   controller.style.width = el?.style?.width || `${rect.width}px`
   controller.style.height = el?.style?.height || `${rect.height}px`
   controller.style.top = el?.style?.top || '0%'
   controller.style.left = el?.style?.left || '0%'
   copyAttribute(el, controller, 'data-left', 0)
   copyAttribute(el, controller, 'data-top', 0)
}

export function hide(editor) {
   // get controller
   const controller = editor.querySelector('.pe-controller')
   controller.classList.remove('pe-is-active')
}

// DELETE
export function deleteItem(event) {
   // get editor
   const editor = getEditor(event.target)
   // find element
   const el = editor.querySelector('.pe-element.pe-is-active')
   // check if element exists
   if (el) {
      // remove element
      el.remove()
      // hide toolbar components
      hideToolbar(editor)
   }
   // mark state
   markState(editor)
}

// HOVER LISTENERS
export const hoverListeners = {
   start: function(event) {
      const el = queryParent(event.target, 'pe-element')
      el.classList.add('pe-is-hovered')
   },
   end: function(event) {
      const el = queryParent(event.target, 'pe-element')
      el.classList.remove('pe-is-hovered')
   },
}

export function setReadOnly(page) {
   const controller = page.querySelector('.pe-controller')
   controller?.remove()
}
