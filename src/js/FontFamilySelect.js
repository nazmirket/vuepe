import CustomSelectBox from './CustomSelectBox'
import FontLoader from './FontLoader'
import Tool from './Tool.js'

export default class FontFamilySelect extends Tool {
   // input select
   select

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-change-font')
      super(toolbar, root, 'ti006')

      this.select = new CustomSelectBox(
         this.root.querySelector('.pe-selector'),
         this.handlers.change
      )

      // load fonts
      FontLoader.load(this)
   }

   handlers = {
      change: function (value) {
         this.setFont(value)
         this.load()
         this.toolbar.editor.sync()
      }.bind(this),
   }

   load() {
      super.load()
      const active = this.getActive()
      this.select.set(active.style.font.family || null)
   }

   setFont(family) {
      const active = this.getActive()
      active.style.setFont({ family: family })
      active.reload()
   }

   setOptions(options) {
      this.select.setOptions(
         options.map((o) => ({
            value: o,
            style: `font-family:${o}`,
         }))
      )
   }
}
