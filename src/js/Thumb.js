export default class RotateButton {
   root
   controller

   constructor(controller, position) {
      this.controller = controller
      const selector = `.pe-thumb-${position.v}-${position.h}`
      this.root = controller.root.querySelector(selector)
   }

   setStatus(visible) {
      if (visible) this.root.style.display = 'unset'
      else this.root.style.display = 'none'
   }
}
