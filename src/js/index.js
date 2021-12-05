import './editor.js'
import './preview.js'

import { getEditorById, getActiveEditor } from './helpers.js'
import {
   changeBackground,
   getNonFunctionalPage,
   getPreviewPage,
   insert,
   removeElement,
} from './actions.js'

import { reload as reloadEditor } from './editor.js'
import { reload as reloadPreview } from './preview.js'

function reload(opts) {
   reloadEditor(opts)
   reloadPreview(opts)
}

function init() {
   // append to the window
   window.$pe = {
      reload,
      changeBackground,
      getNonFunctionalPage,
      getPreviewPage,
      insert,
      removeElement,
      getEditorById,
      getActiveEditor,
   }
}

export {
   init,
   changeBackground,
   getNonFunctionalPage,
   getPreviewPage,
   insert,
   removeElement,
   reload,
   getEditorById,
   getActiveEditor,
}
