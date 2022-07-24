import Tool from './Tool.js'

export default class FontWeightToggle extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-toggle-bold')
      super(toolbar, root, 'ti010')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {}

   handlers = {
      click: function () {}.bind(this),
   }
}
