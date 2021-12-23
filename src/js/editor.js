import { registerClick, registerChange, setActiveEditor } from './helpers.js'

import { setDrag, setResize, setRotate } from './interact.js'

import {
   changeColor,
   changeFontFamily,
   changeFontSize,
   flipBack,
   flipFront,
   flipHorizontal,
   flipVertical,
   toggleToolbar,
   toggleBold,
   toggleItalic,
   toggleStrike,
   setupAlign,
   setupAlpha,
} from './toolbar.js'

import { deleteItem, initHover, locateListener } from './controller.js'

import { init as initFonts } from './fonts.js'
import { init as initHistory } from './history.js'
import { init as initKeyboard } from './keyboard.js'
import { init as initAudio } from './audio.js'
import { init as initMaterials } from './materials.js'

export function reload() {
   // INIT HISTORY
   initHistory()

   // EDITOR
   // set active editor
   registerClick('.pe-editor', setActiveEditor)

   // CONTROLLER
   // delete-handle
   registerClick('.pe-editor .pe-delete-handle', deleteItem)
   // drag listener
   setDrag('.pe-editor .pe-element')
   // rotate listener
   setRotate('.pe-editor .pe-rotate-handle')
   // resize listener
   setResize('.pe-editor .pe-controller.pe-is-resizable')
   // init hover
   initHover()
   // register element clicks
   registerClick('.pe-editor .pe-element', locateListener)

   // TOOLBAR
   // setup align
   setupAlign()
   // setup alpha
   setupAlpha()
   // change font
   registerChange('.pe-change-font-select', changeFontFamily)
   // change size
   registerChange('.pe-change-font-size-select', changeFontSize)
   // change color
   registerChange('.pe-change-color-picker', changeColor)
   // toggle bold
   registerClick('.pe-toggle-bold', toggleBold)
   // toggle italic
   registerClick('.pe-toggle-italic', toggleItalic)
   // toggle strike
   registerClick('.pe-toggle-strike', toggleStrike)
   // flip horizontal
   registerClick('.pe-flip-horizontal', flipHorizontal)
   // flip vertical
   registerClick('.pe-flip-vertical', flipVertical)
   // flip front
   registerClick('.pe-flip-front', flipFront)
   // flip back
   registerClick('.pe-flip-back', flipBack)

   // INIT MATERIAL DRAG DROP
   initMaterials()

   // TOOLBAR TOGGLE
   // hide toolbar
   registerClick('.pe-editor .pe-page', toggleToolbar)
   // hide toolbar
   registerClick('.pe-editor .pe-content', toggleToolbar)

   // INIT AUDIO
   initAudio()

   // INIT FONTS
   initFonts()

   // INIT KEYBOARD
   initKeyboard()
}
