import ElementCreator from './ElementCreator'
import StyleComposer from './StyleComposer'
import IdGenerator from './IdGenerator.js'

export default class Component {
   // root element
   id
   root
   editor
   type

   props = {}

   style = {
      z: 0,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      transform: {
         translate: { x: 0, y: 0 },
         rotate: 0,
         scaleX: 1,
         scaleY: 1,
      },
   }

   listeners = {
      // click listeners
      click: function () {
         this.editor.setActive(this.id)
      }.bind(this),
      // hover listeners
      hover: {
         start: function () {
            this.root.classList.add('pe-is-hovered')
         }.bind(this),
         end: function () {
            this.root.classList.remove('pe-is-hovered')
         }.bind(this),
      },
   }

   // constructor
   constructor(editor, type, style, props) {
      this.id = IdGenerator()
      this.editor = editor
      this.type = type
      this.style = { ...this.style, ...style }
      this.props = { ...props }
   }

   // actions for toolbar
   actions = {
      // Horizontal Flip
      t01() {},
      // Vertical Flip
      t02() {},
      // Flip Back
      t03() {},
      // Flip Front
      t04() {},
      // Change Alpha
      t05() {},
      // Change Font Style
      t06() {},
      // Change Font Size
      t07() {},
      // Change Color
      t08() {},
      // Change Align
      t09() {},
      // Change Font Weigth
      t10() {},
      // Change Italic
      t11() {},
      // Change Strike
      t12() {},
   }

   // init function
   init() {
      this.root = ElementCreator[this.type](this)

      this.root.addEventListener('click', this.listeners.click)
      this.root.addEventListener('mouseover', this.listeners.hover.start)
      this.root.addEventListener('mouseleave', this.listeners.hover.end)

      this.root.setAttribute('id', this.id)

      const page = this.editor.getPage()
      page.appendChild(this.root)

      const eRect = this.root.getBoundingClientRect()
      const pRect = page.getBoundingClientRect()

      this.style.width = (eRect.width / pRect.width) * 100
      this.style.height = (eRect.height / pRect.height) * 100

      this.reload()
   }

   // reload function
   reload() {
      this.root.style = StyleComposer(this.style)
   }
}
