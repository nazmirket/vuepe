import { insert } from './actions.js'
import { getActiveEditor, resolveDropType, parseJSON } from './helpers.js'

import { init as initDragDrop } from './drag-drop.js'

function insertOnClick(event) {
   try {
      // find props
      const type = resolveDropType(event.target)
      const value = event.target.getAttribute('pass-value')
      const styles = parseJSON(event.target.getAttribute('pass-style')) || {}
      const classes = parseJSON(event.target.getAttribute('pass-class')) || []

      // insert item to active editor
      insert(getActiveEditor(), type, value, styles, classes)
   } catch (error) {}
}

export function init() {
   // init drag and drop
   initDragDrop()

   // init click listener
   document.querySelectorAll('.pe-drop-item').forEach(function (material) {
      material.addEventListener('click', insertOnClick)
   })
}
