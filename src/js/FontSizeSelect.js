import Tool from './Tool.js'

export default class FontSizeSelect extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-font-size')
      super(toolbar, root, 'ti007')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
