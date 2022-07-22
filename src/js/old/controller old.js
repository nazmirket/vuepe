import DeleteIcon from '../icons/delete.svg'
import RotateIcon from '../icons/rotate.svg'

import {
   copyAttribute,
   queryParent,
   getEditor,
   resolveType,
} from './helpers.js'

import { hideAll as hideToolbar, toggleToolbar } from './toolbar.js'

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

export function locateListener(event) {
   // hide first
   const editor = getEditor(event?.target || event)
   hide(editor)

   // activate target
   const element = queryParent(event?.target || event, 'pe-element')
   element.classList.add('pe-is-active')
   locate(editor, element)

   // toggle toolbar
   toggleToolbar(event)
}

function locate(editor, el) {
   // get type
   const type = resolveType(el)

   // find controller
   const controller = editor.querySelector('.pe-controller')

   // resolve options
   const { thumbs, rotate = false } = options[type]

   // set delete
   const deleteHandle = editor.querySelector('.pe-delete-handle')
   deleteHandle.style.display = 'unset'
   deleteHandle.querySelector('img').src = DeleteIcon

   deleteHandle.addEventListener('click', deleteItem)

   // set rotate
   const rotateHandle = editor.querySelector('.pe-rotate-handle')
   rotateHandle.style.display = rotate ? 'unset' : 'none'
   rotateHandle.querySelector('img').src = RotateIcon

   // set thumbs
   if (thumbs) controller.classList.add('pe-is-resizable')
   else controller.classList.remove('pe-is-resizable')

   // get page rectangle
   const page = editor.querySelector('.pe-page')
   const pageRect = page.getBoundingClientRect()

   // get element rect
   const elRect = el.getBoundingClientRect()

   // activate
   controller.classList.add('pe-is-active')
   controller.style['z-index'] = 99999999

   // copy style
   controller.style.width =
      el?.style?.width || `${(elRect.width / pageRect.width) * 100}%`

   controller.style.height =
      el?.style?.height || `${(elRect.height / pageRect.height) * 100}%`

   controller.style.top = el?.style?.top || '0%'
   controller.style.left = el?.style?.left || '0%'

   copyAttribute(el, controller, 'data-left', 0)
   copyAttribute(el, controller, 'data-top', 0)
}

export function hide(editor) {
   // deactivate all elements
   editor
      .querySelectorAll('.pe-editor .pe-element')
      .forEach((e) => e.classList.remove('pe-is-active'))

   // get controller
   const controller = editor?.querySelector('.pe-controller')
   if (controller) controller.classList.remove('pe-is-active')
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
      // hide controller
      hide(editor)
   }
   // mark state
   markState(editor)
}

const hoverStart = function (event) {
   const el = queryParent(event.target, 'pe-element')
   el.classList.add('pe-is-hovered')
}

const hoverEnd = function (event) {
   const el = queryParent(event.target, 'pe-element')
   el.classList.remove('pe-is-hovered')
}

// HOVER LISTENERS
export function initHover() {
   document.querySelectorAll('.pe-editor .pe-element').forEach(function (el) {
      el.addEventListener('mouseover', hoverStart)
      el.addEventListener('mouseleave', hoverEnd)
   })
}

export function setReadOnly(page) {
   const controller = page.querySelector('.pe-controller')
   controller?.remove()
}
