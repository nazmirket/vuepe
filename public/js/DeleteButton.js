import Icons from './Icons'

export default class DeleteButton {
   root
   controller

   constructor(controller) {
      this.controller = controller
      this.root = controller.root.querySelector('.pe-delete-handle')
      this.root.querySelector('img').src = Icons.DeleteIcon
   }

   handlers = {
      // click listeners
      click: function () {
         const active = this.controller.editor.getActive()
         this.controller.editor.remove(active)
      }.bind(this),
   }

   init() {
      this.root.addEventListener('click', this.handlers.click)
   }

   setStatus(visible) {
      if (visible) this.root.style.display = 'unset'
      else this.root.style.display = 'none'
   }
}
