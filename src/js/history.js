import { getEditor, registerClick } from './helpers.js'

const histories = new Map()
const memory = 50 // step count to keep in memory

function undoListener(event) {
   // get editor
   const editor = getEditor(event.target)
   // call undo
   undo(editor)
}

function redoListener(event) {
   // get editor
   const editor = getEditor(event.target)
   // call redo
   redo(editor)
}

// GET CURRENT CONTENT
function getPage(editor) {
   // get page
   const page = editor.querySelector('.pe-page')
   // return html content
   return { node: page, html: page.outerHTML }
}

// GET CURRENT HISTORY
function getCurrent(editor) {
   const editorID = editor.getAttribute('id')
   // get history
   const current = histories.get(editorID)

   if (!current) return { history: null, pointer: -1 }
   return { ...current, size: current.history?.length }
}

// SET CURRENT
function setCurrent(editor, props) {
   const editorID = editor.getAttribute('id')
   // get history
   const current = histories.get(editorID)

   // return if not found
   if (!current) return

   // update data
   histories.set(editorID, { ...current, ...props })
}

// INIT
export function init() {
   // init editor hists
   const editors = document.querySelectorAll('.pe-editor')
   for (const editor of editors) {
      const page = editor.querySelector('.pe-page')
      initHistory(editor, page)
   }
   // register buttons
   registerClick('.pe-undo', undoListener)
   registerClick('.pe-redo', redoListener)
}

// REFRESH UNDO REDO STYLE
function refreshButtons(editor) {
   // get current
   const { pointer, size } = getCurrent(editor)
   // undo button
   const undoBtn = editor.querySelector('.pe-undo')
   if (pointer > 0 && size > 1) undoBtn.classList.remove('pe-is-disabled')
   else undoBtn.classList.add('pe-is-disabled')

   // redo button
   const redoBtn = editor.querySelector('.pe-redo')
   if (pointer < size - 1) redoBtn.classList.remove('pe-is-disabled')
   else redoBtn.classList.add('pe-is-disabled')
}

// INIT HISTORY
function initHistory(editor, page) {
   const editorID = editor.getAttribute('id')
   if (!histories.get(editorID))
      histories.set(editorID, {
         pointer: 0,
         history: [page.outerHTML],
      })
}

// MARK STATE
export function markState(editor) {
   // return if not editor
   if (!editor) return window?.$pe.reload()

   // get history
   const { history, pointer, size } = getCurrent(editor)

   // get current state of page
   const { html } = getPage(editor)

   // if memory is full
   if (size >= memory && pointer + 1 === size)
      setCurrent(editor, {
         history: [...history, html].slice(1, memory + 1),
      })
   // if last
   else if (pointer + 1 === size)
      setCurrent(editor, {
         history: [...history, html],
         pointer: pointer + 1,
      })
   // else
   else
      setCurrent(editor, {
         history: [...[...history].slice(0, pointer + 1), html],
         pointer: pointer + 1,
      })

   // refresh buttons
   refreshButtons(editor)

   // refresh page
   window?.$pe?.historyListener(editor, html)
}

// UNDO
export function undo(editor) {
   // get history
   const { pointer, history } = getCurrent(editor)

   // if no history return
   if (history === null) return init()

   // get page
   const { node } = getPage(editor)

   // undo if history is not empty
   if (pointer > 0) {
      node.outerHTML = history[pointer - 1]
      setCurrent(editor, {
         pointer: pointer - 1,
      })
   }

   // refresh buttons
   refreshButtons(editor)

   // call history listener
   window?.$pe?.historyListener(editor, node.outerHTML)
}

// REDO
export function redo(editor) {
   // get history
   const { pointer, history, size } = getCurrent(editor)

   // if no history return
   if (history === null) return init()

   // get page
   const { node } = getPage(editor)

   // redo if pointer is not the last index
   if (pointer + 1 < size) {
      node.outerHTML = history[pointer + 1]
      setCurrent(editor, {
         pointer: pointer + 1,
      })
   }

   // refresh buttons
   refreshButtons(editor)

   // call history listener
   window?.$pe?.historyListener(editor, node.outerHTML)
}
