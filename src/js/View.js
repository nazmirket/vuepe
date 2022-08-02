import ComponentStyle from './ComponentStyle'
import Id from './Id.js'

export default class View {
   // root element
   id
   root
   viewer

   props = {}

   //style
   style

   // constructor
   constructor(viewer, style, props) {
      this.id = Id()
      this.viewer = viewer
      this.style = new ComponentStyle(style)
      this.props = { ...props }
   }

   // init function
   init() {
      this.root = this.create()
      this.root.setAttribute('id', this.id)

      const page = this.viewer.getPage()
      page.appendChild(this.root)

      const eRect = this.root.getBoundingClientRect()
      const pRect = page.getBoundingClientRect()

      this.style.setSize(
         (eRect.width / pRect.width) * 100,
         (eRect.height / pRect.height) * 100
      )

      this.root.style = this.style.toString()
   }
}
