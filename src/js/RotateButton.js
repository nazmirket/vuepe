import Icons from './Icons'
import Interact from './Interact'

export default class RotateButton {
   root
   controller

   constructor(controller) {
      this.controller = controller
      this.root = controller.root.querySelector('.pe-rotate-handle')
      this.root.querySelector('img').src = Icons.RotateIcon
   }

   init() {
      Interact.setRotate(this)
   }

   setStatus(visible) {
      if (visible) this.root.style.display = 'unset'
      else this.root.style.display = 'none'
   }
}
