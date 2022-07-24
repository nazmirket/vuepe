import Tool from './Tool.js'

export default class OpacitySlider extends Tool {
   // input slider
   slider
   value

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-opacity')
      super(toolbar, root, 'ti005')

      this.slider = this.root.querySelector('input')

      // register event listener
      this.slider.addEventListener('change', this.handlers.change)
   }

   handlers = {
      change: function (event) {
         const value = parseInt(event.target.value) / 100
         this.set(value)
         this.load()
         this.toolbar.editor.onChange()
      }.bind(this),
   }

   load() {
      super.load()

      const active = this.getActive()
      this.value = active.style.opacity

      this.slider.value = this.value * 100
   }

   set(value) {
      const active = this.getActive()
      active.style.opacity = value
      active.reload()
   }
}
