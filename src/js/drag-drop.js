import { getEditor, resolveDropType } from './helpers.js'

import { insert } from './actions.js'

function onDragStart(event) {
   try {
      // find props
      const type = resolveDropType(event.target)
      const src = event.target.src || event.target.innerText

      // pass data as json string
      event.dataTransfer.setData(
         'text/plain',
         JSON.stringify({
            type,
            src,
         })
      )

      // add active class to drop element
      event.currentTarget.classList.add('pe-active-drop-item')
   } catch (error) {}
}

function onDragEnd(event) {
   // remove active class from drop element
   event.currentTarget.classList.remove('pe-active-drop-item')
}

function onDragEndEditor(event) {
   // remove active class from page
   event.currentTarget.classList.remove('pe-page-can-drop')
}

function onDragOver(event) {
   // prevent default action
   event.preventDefault()

   // add active class to drop element
   event.currentTarget.classList.add('pe-page-can-drop')
}

function onDragLeave(event) {
   // add active class to drop element
   event.currentTarget.classList.remove('pe-page-can-drop')
}

function onDrop(event) {
   // get editor
   const editor = getEditor(event.target)
   // raw json
   const rawJson = event.dataTransfer.getData('text')
   // parse props
   const props = JSON.parse(rawJson)
   // extract fields
   const { type, src } = props
   // empty dta transfer
   event.dataTransfer.clearData()
   // remove active class from page
   event.currentTarget.classList.remove('pe-page-can-drop')
   // insert element
   insert(editor, type, src)
}

export function init() {
   document.querySelectorAll('.pe-drop-item').forEach(function(material) {
      material.addEventListener('dragstart', onDragStart)
      material.addEventListener('dragend', onDragEnd)
   })

   document.querySelectorAll('.pe-editor .pe-page').forEach(function(page) {
      page.addEventListener('dragover', onDragOver)
      page.addEventListener('dragleave', onDragLeave)
      page.addEventListener('drop', onDrop)
      page.addEventListener('dragend', onDragEndEditor)
   })
}
