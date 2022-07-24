import Tool from './Tool.js'

export default class FontItalicToggle extends Tool {
   // input button
   button
   isItalic

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-toggle-italic')
      super(toolbar, root, 'ti011')

      this.button = this.root.querySelector('button')

      // register event listener
      this.button.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function () {
         this.toggle()
         this.load()
         this.toolbar.editor.onChange()
      }.bind(this),
   }

   load() {
      super.load()

      const active = this.getActive()
      this.isItalic = active.style.font.style === 'italic'

      if (this.isItalic) this.button.classList.add('pe-is-active')
      else this.button.classList.remove('pe-is-active')
   }

   toggle() {
      const active = this.getActive()
      active.style.setFont({ style: this.isItalic ? 'normal' : 'italic' })
      active.reload()
   }
}
