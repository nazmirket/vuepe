import Tool from './Tool.js'

export default class FlipBackButton extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-flip-back')
      super(toolbar, root, 'ti003')

      this.button = this.root.querySelector('button')

      // register event listener
      this.button.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {
         this.sendToBack()
         this.load()
         this.toolbar.editor.sync()
      }.bind(this),
   }

   sendToBack() {
      const active = this.getActive()
      const minZ = this.toolbar.editor.getMinZ()
      active.style.setZ(minZ - 1)
      active.reload()
   }
}
