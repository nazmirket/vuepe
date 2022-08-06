import ComponentFactory from './ComponentFactory'

import Controller from './Controller'
import Toolbar from './Toolbar'

export default class Editor {
   active = ''
   root
   page
   configs = {}
   components = {}

   constructor(opts) {
      // root
      this.root = opts.root
      this.page = this.root.querySelector('.pe-page')

      // events
      this.onChange = opts.onChange
      this.sync = this.handlers.change

      // components
      this.toolbar = new Toolbar(this)
      this.controller = new Controller(this)
   }

   handlers = {
      // click listener
      click: function (event) {
         event.stopPropagation()
         const panes = ['pe-page', 'pe-content', 'pe-page-wrapper']
         for (const pane of panes) {
            if (event.target.classList.contains(pane)) this.controller.hide()
         }
      }.bind(this),
      // change listener
      change: function () {
         const configs = { ...this.configs }
         const components = Object.values(this.components).map((c) => ({
            type: c.type,
            props: c.props,
            style: c.style.toObject(),
         }))
         this.onChange(components, configs)
      }.bind(this),
   }

   // load function
   load(components = [], configs = {}) {
      // add components
      for (const data of components) {
         const { type, style, props } = data
         const component = ComponentFactory(this, style, props, type)
         this.components[component.id] = component
         component.init()
      }

      // add configs
      this.configs = { ...configs }

      this.root
         .querySelector('.pe-content')
         .addEventListener('click', this.handlers.click)
   }

   // set active component
   setActive(id) {
      if (this.active === id) return

      // remove active class from old one
      const c1 = this.getActive()
      c1?.root?.classList?.remove('pe-is-active')

      this.active = id

      // add active class to new one
      const c2 = this.getActive()
      c2?.root?.classList?.add('pe-is-active')

      // show toolbar and controller if there is active element
      if (c2) {
         this.toolbar.show()
         this.controller.show()
      }
      // hide if not
      else {
         this.toolbar.hide()
         this.controller.hide()
      }
   }

   // get active component
   getActive() {
      return this.components[this.active]
   }

   // get page
   getPage() {
      return this.page
   }

   // insert
   insert(data) {
      const { type, style, props } = data
      const component = ComponentFactory(this, style, props, type)

      this.components[component.id] = component
      component.init()

      this.sync()
   }

   // remove
   remove(component) {
      const componentId = component.id

      // remove root of the element
      this.components[componentId]?.remove()

      // remove elements from the component map
      delete this.components[componentId]

      // hide controller
      this.controller.hide()

      // hide toolbar
      this.toolbar.hide()

      this.sync()
   }

   // get max z index
   getMaxZ() {
      return Object.values(this.components)
         .map((c) => c.style.z)
         .sort((a, b) => a - b)
         .pop()
   }

   // get min z index
   getMinZ() {
      return Object.values(this.components)
         .map((c) => c.style.z)
         .sort((a, b) => b - a)
         .pop()
   }
}
