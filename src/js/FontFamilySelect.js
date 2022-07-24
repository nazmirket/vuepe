import Tool from './Tool.js'

export default class FontFamilySelect extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-font')
      super(toolbar, root, 'ti006')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
