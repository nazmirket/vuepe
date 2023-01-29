import ViewFactory from './ViewFactory'
import PageStyle from './PageStyle'
import FontLoader from './FontLoader'

export default class Viewer {
   root
   page

   // style
   style

   // views
   views = []

   constructor(opts) {
      // root
      this.root = opts.root
      this.page = this.root.querySelector('.pe-page')

      // load fonts
      FontLoader.load()
   }

   // load function
   render(views = [], style) {
      this.views = []
      for (const data of views) {
         const { type, style, props } = data

         const view = ViewFactory(this, style, props, type)

         this.views.push(view)
         view.init()
      }

      // load style
      this.style = new PageStyle(style)
      this.page.style = this.style.toString()
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
