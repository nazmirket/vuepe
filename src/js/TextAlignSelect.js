import Tool from './Tool.js'

export default class TextAlignSelect extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-align')
      super(toolbar, root, 'ti009')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
