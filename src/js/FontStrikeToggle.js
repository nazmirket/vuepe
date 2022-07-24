import Tool from './Tool.js'

export default class FontStrikeToggle extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-toggle-strike')
      super(toolbar, root, 'ti012')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
