import Tool from './Tool.js'

export default class FlipFrontButton extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-flip-front')
      super(toolbar, root, 'ti004')

      this.button = this.root.querySelector('button')

      // register event listener
      this.button.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {
         this.bringToFront()
         this.load()
         this.toolbar.editor.sync()
      }.bind(this),
   }

   bringToFront() {
      const active = this.getActive()
      const maxZ = this.toolbar.editor.getMaxZ()
      active.style.setZ(maxZ + 1)
      active.reload()
   }
}
