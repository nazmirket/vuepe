import Tool from './Tool.js'
import Icons from './Icons'

export default class FontSizeSelect extends Tool {
   // input select
   select
   size

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-font-size')
      super(toolbar, root, 'ti007')

      this.select = this.root.querySelector('select')

      // register event listener
      this.select.addEventListener('change', this.handlers.change)
      this.select.style.backgroundImage = `url(${Icons.SelectArrow})`
   }

   handlers = {
      change: function (event) {
         this.setSize(event.target.value)
         this.load()
         this.toolbar.editor.onChange()
      }.bind(this),
   }

   load() {
      super.load()

      const active = this.getActive()
      this.size = active.style.font.size
   }

   setSize(value) {
      const active = this.getActive()
      active.style.setFont({ size: value })
      active.reload()
   }
}
