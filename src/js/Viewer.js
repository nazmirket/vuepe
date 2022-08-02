import ImageView from './ImageView'
import TextView from './TextView'
import AudioView from './AudioView'

export default class Viewer {
   root
   page
   configs = {}
   components = {}

   constructor(opts, components = [], configs = {}) {
      // root
      this.root = opts.root
      this.page = this.root.querySelector('.pe-page')

      // add configs
      this.configs = { ...configs }

      // add components
      for (const data of components) {
         let c = null
         const { type, style, props } = data

         if (type === 'image') c = new ImageView(this, style, props)
         if (type === 'audio') c = new AudioView(this, style, props)
         if (type === 'text') c = new TextView(this, style, props)

         this.components[c.id] = c
      }

      // init editor
      this.load()
   }

   // load function
   load() {
      // init components
      Object.values(this.components).forEach((c) => c.init())
   }

   // get page
   getPage() {
      return this.page
   }
}
