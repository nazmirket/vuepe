import Component from './Component'
import Controller from './Controller'
import Toolbar from './Toolbar'

export default class Editor {
   active = ''
   root
   page
   configs = {}
   components = []

   constructor(opts, components = [], configs = {}) {
      // root
      this.root = opts.root
      this.page = this.root.querySelector('.pe-page')

      // add configs
      this.configs = { ...configs }

      // events
      this.onChange = opts.onChange

      // components
      this.toolbar = new Toolbar(this)
      this.controller = new Controller(this)

      // add components
      for (const data of components) {
         const component = new Component(
            this,
            data.type,
            data.style,
            data.props
         )
         this.components.push(component)
      }

      // init editor
      this.load()
   }

   // load function
   load() {
      // init components
      this.components.forEach((c) => c.init())
   }

   // set active component
   setActive(id) {
      if (this.active === id) return
      this.active = id
      this.toolbar.load()
      this.controller.locate()
   }

   // get active component
   getActive() {
      const component = this.components.find((c) => c.id === this.active)
      return component
   }

   // get page
   getPage() {
      return this.page
   }

   // insert
   insert(data) {
      const component = new Component(this, data.type, data.style, data.props)
      this.components.push(component)
      component.init()
   }

   // remove
   remove(component) {
      console.log('removing... ', component)
   }
}
