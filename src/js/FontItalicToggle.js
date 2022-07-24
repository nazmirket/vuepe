import Tool from './Tool.js'

export default class FontItalicToggle extends Tool {
   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-toggle-italic')
      super(toolbar, root, 'ti011')

      // register event listener
      this.root.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {}.bind(this),
   }
}
