import Tool from './Tool.js'

export default class FlipHorizontalButton extends Tool {
   // input button
   button
   flipped

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-flip-horizontal')
      super(toolbar, root, 'ti001')

      this.button = this.root.querySelector('button')

      // register event listener
      this.button.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {
         this.flip()
         this.load()
         this.toolbar.editor.sync()
      }.bind(this),
   }

   load() {
      super.load()

      const active = this.getActive()
      this.flipped = active.style.transform.scaleX === -1

      if (this.flipped) this.button.classList.add('pe-is-active')
      else this.button.classList.remove('pe-is-active')
   }

   flip() {
      const active = this.getActive()
      active.style.setTransform({ scaleX: this.flipped ? 1 : -1 })
      active.reload()
   }
}
