import Tool from './Tool.js'

export default class TextColorSelect extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-color')
      super(toolbar, root, 'ti008')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
