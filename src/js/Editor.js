import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import AudioComponent from './AudioComponent'

import Controller from './Controller'
import Toolbar from './Toolbar'

export default class Editor {
   active = ''
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

      // events
      this.onChange = opts.onChange

      // components
      this.toolbar = new Toolbar(this)
      this.controller = new Controller(this)

      // add components
      for (const data of components) {
         let c = null
         const { type, style, props } = data

         if (type === 'image') c = new ImageComponent(this, style, props)
         if (type === 'audio') c = new AudioComponent(this, style, props)
         if (type === 'text') c = new TextComponent(this, style, props)

         this.components[c.id] = c
      }

      // init editor
      this.load()
   }

   handlers = {
      click: function (event) {
         event.stopPropagation()
         console.log(event.target)
         const panes = ['pe-page', 'pe-content', 'pe-page-wrapper']
         for (const pane of panes) {
            if (event.target.classList.contains(pane)) this.controller.hide()
         }
      }.bind(this),
   }

   // load function
   load() {
      // init components
      Object.values(this.components).forEach((c) => c.init())

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
      let c = null

      const { type, style, props } = data

      if (type === 'image') c = new ImageComponent(this, style, props)
      if (type === 'audio') c = new AudioComponent(this, style, props)
      if (type === 'text') c = new TextComponent(this, style, props)

      this.components[c.id] = c
      c.init()
      this.onChange()
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

      this.onChange()
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
