import ComponentFactory from './ComponentFactory'

import Controller from './Controller'
import PageStyle from './PageStyle'
import Toolbar from './Toolbar'

export default class Editor {
   active = ''
   root
   page

   // style
   style

   // components
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
         const style = { ...this.style.toObject() }
         const active = this.active
         const components = Object.values(this.components).map((c) => ({
            id: c.id,
            type: c.type,
            props: c.props,
            style: c.style.toObject(),
            isActive: c.id === active,
         }))
         this.onChange(components, style)
      }.bind(this),
   }

   // load function
   load(components = [], style = {}) {
      // clear
      this.clear()

      // add components
      for (const data of components) {
         const { type, style, props, id, isActive } = data
         this.components[id] = ComponentFactory(this, style, props, type, id)
         this.components[id].init()

         if (isActive) this.setActive(id)
      }

      // load style
      this.style = new PageStyle(style)
      this.page.style = this.style.toString()

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
      // hide toolbar and controller
      else {
         this.toolbar.hide()
         this.controller.hide()
      }
   }

   // get active component
   getActive() {
      return this.components[this.active]?.id
         ? this.components[this.active]
         : undefined
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

   // set background
   setBackground({ image, color }) {
      this.style.setBackground({ image, color })
      this.page.style = this.style.toString()
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

   // clear
   clear() {
      this.setActive()
      this.page.querySelectorAll('.pe-element').forEach((e) => e.remove())
      this.components = {}
   }
}
