import { queryParent, getEditor, resolveAlignIcon } from './helpers.js'
import { markState } from './history.js'

function toggle(event) {
   // register toggle menu
   const current = queryParent(event.target, 'pe-change-align')
   const menu = current.querySelector('.pe-align-menu')
   menu.classList.toggle('pe-hidden')
}

function right(event) {
   const current = queryParent(event.target, 'pe-change-align')
   const selected = current.querySelector('.pe-align-selected')
   selected.src = resolveAlignIcon('right')
   alignText(event, 'right')
}

function left(event) {
   const current = queryParent(event.target, 'pe-change-align')
   const selected = current.querySelector('.pe-align-selected')
   selected.src = resolveAlignIcon('left')
   alignText(event, 'left')
}

function center(event) {
   const current = queryParent(event.target, 'pe-change-align')
   const selected = current.querySelector('.pe-align-selected')
   selected.src = resolveAlignIcon('center')
   alignText(event, 'center')
}

function alignText(event, orientation) {
   // get editor
   const editor = getEditor(event.target)
   // find element
   const text = editor.querySelector('.pe-element.pe-is-active .pe-item')
   // change align
   text.style.textAlign = orientation
   // mark state
   markState(editor)
}

export default {
   toggle,
   right,
   left,
   center,
}
