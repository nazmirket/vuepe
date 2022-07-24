import ComponentStyle from './ComponentStyle'
import Id from './Id.js'

export default class Component {
   // root element
   id
   root
   editor

   props = {}

   //style
   style

   handlers = {
      // click listeners
      click: function () {
         this.editor.setActive(this.id)
      }.bind(this),
   }

   // constructor
   constructor(editor, style, props) {
      this.id = Id()
      this.editor = editor
      this.style = new ComponentStyle(style)
      this.props = { ...props }
   }

   // init function
   init() {
      this.root = this.create()
      this.root.setAttribute('id', this.id)

      const page = this.editor.getPage()
      page.appendChild(this.root)

      const eRect = this.root.getBoundingClientRect()
      const pRect = page.getBoundingClientRect()

      this.style.setSize(
         (eRect.width / pRect.width) * 100,
         (eRect.height / pRect.height) * 100
      )

      this.setClick()

      this.reload()
   }

   // set click
   setClick() {
      this.root.addEventListener('click', this.handlers.click)
   }

   // reload function
   reload() {
      this.root.style = this.style.toString()
   }

   // remove
   remove() {
      this.root.remove()
   }
}
