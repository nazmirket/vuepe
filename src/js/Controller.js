import Id from './Id.js'
import ControllerStyle from './ControllerStyle'

import Interact from './Interact'

import RotateButton from './RotateButton'
import DeleteButton from './DeleteButton'
import Thumb from './Thumb'

export default class Controller {
   // controller id
   id
   // controller root element
   root

   // control buttons
   deleteButton
   rotateButton

   // thumbs for resize
   thumbs = []

   // style
   style

   // constructor
   constructor(editor) {
      this.id = Id()
      this.editor = editor
      this.root = this.editor.root.querySelector('.pe-controller')

      this.style = new ControllerStyle()

      this.deleteButton = new DeleteButton(this)
      this.rotateButton = new RotateButton(this)

      this.thumbs = [
         new Thumb(this, { v: 'top', h: 'left' }),
         new Thumb(this, { v: 'top', h: 'right' }),
         new Thumb(this, { v: 'bottom', h: 'left' }),
         new Thumb(this, { v: 'bottom', h: 'right' }),
      ]

      this.init()
   }

   // INIT
   init() {
      this.root.setAttribute('id', this.id)

      this.deleteButton.init()
      this.rotateButton.init()

      Interact.setResize(this)
      Interact.setDrag(this)
   }

   // show
   show() {
      this.root.classList.add('pe-is-active')

      const active = this.editor.getActive()
      const options = active.getControllerOptions()

      // DELETE BUTTON
      this.deleteButton.setStatus(options.delete)

      // ROTATE BUTTON
      this.rotateButton.setStatus(options.rotate)

      // THUMBS
      for (const thumb of this.thumbs) thumb.setStatus(options.resize)

      // copy width
      this.style.copy(active.style)

      this.reload()
   }

   // hide
   hide() {
      this.root.classList.remove('pe-is-active')

      // DELETE BUTTON
      this.deleteButton.setStatus(false)

      // ROTATE BUTTON
      this.rotateButton.setStatus(false)

      // THUMBS
      for (const thumb of this.thumbs) thumb.setStatus(false)

      this.reload()
   }

   // reload to sync view
   reload() {
      this.root.style = this.style.toString()
   }

   // apply changes to the active component
   apply() {
      const active = this.editor.getActive()
      active.style.copy(this.style)
      active.reload()
   }

   // resize
   resize(width, height) {
      this.style.setSize(width, height)
      this.apply()
      this.reload()
   }

   // rotate
   rotate(angle) {
      this.style.setRotate(angle)
      this.apply()
      this.reload()
   }

   // drag
   drag(left, top) {
      this.style.setPosition(left, top)
      this.apply()
      this.reload()
   }
}
