import { getEditor, resolveDropType, parseJSON } from './helpers.js'

import { insert } from './actions.js'

function onDragStart(event) {
   try {
      // empty data transfer
      event.dataTransfer.clearData()

      // find props
      const type = resolveDropType(event.target)
      const value = event.target.getAttribute('pass-value')
      const styles = parseJSON(event.target.getAttribute('pass-style')) || {}
      const classes = parseJSON(event.target.getAttribute('pass-class')) || []

      // data to be transferred
      const data = JSON.stringify({
         type: type,
         value: value,
         styles: styles,
         classes: classes,
      })

      // pass data as json string
      event.dataTransfer.setData('text/json', data)

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
   const rawJson = event.dataTransfer.getData('text/json')

   // empty data transfer
   event.dataTransfer.clearData()

   // remove active class from page
   event.currentTarget.classList.remove('pe-page-can-drop')

   // parse props
   const props = parseJSON(rawJson)

   // return if a error occurs
   if (!props) return

   console.log(props)

   // extract fields
   const { type, value, styles = {}, classes = [] } = props

   // insert element
   insert(editor, type, value, styles, classes)
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
