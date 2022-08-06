import ViewFactory from './ViewFactory'

export default class Viewer {
   root
   page
   configs = {}
   views = []

   constructor(opts) {
      // root
      this.root = opts.root
      this.page = this.root.querySelector('.pe-page')
   }

   // load function
   render(views = [], configs = {}) {
      // add configs
      this.configs = { ...configs }

      this.views = []

      for (const data of views) {
         const { type, style, props } = data

         const view = ViewFactory(this, style, props, type)

         this.views.push(view)
         view.init()
      }
   }

   // clear
   clear() {
      for (const v of this.views) v.remove()
      this.views = []
   }

   // get page
   getPage() {
      return this.page
   }
}
