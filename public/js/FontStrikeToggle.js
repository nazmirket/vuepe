import Tool from './Tool.js'

export default class FontStrikeToggle extends Tool {
   // input button
   button
   isStrike

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-toggle-strike')
      super(toolbar, root, 'ti012')

      this.button = this.root.querySelector('button')

      // register event listener
      this.button.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {
         this.toggle()
         this.load()
         this.toolbar.editor.sync()
      }.bind(this),
   }

   load() {
      super.load()

      const active = this.getActive()
      this.isStrike = active.style.font.decoration === 'line-through'

      if (this.isStrike) this.button.classList.add('pe-is-active')
      else this.button.classList.remove('pe-is-active')
   }

   toggle() {
      const active = this.getActive()
      active.style.setFont({
         decoration: this.isStrike ? 'none' : 'line-through',
      })
      active.reload()
   }
}
