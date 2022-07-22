import ToolMaps from './ToolMaps'
import StyleComposer from './StyleComposer'
import Icons from './Icons'
import Interact from './Interact'
import IdGenerator from './IdGenerator.js'

export default class Controller {
   // controller id
   id
   // controller root element
   root

   // buttons
   buttons = {
      d: null,
      r: null,
   }

   // style
   style = {
      z: 9999,
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

   // constructor
   constructor(editor) {
      this.id = IdGenerator()
      this.editor = editor
      this.root = this.editor.root.querySelector('.pe-controller')
      this.buttons.d = this.root.querySelector('.pe-delete-handle')
      this.buttons.r = this.root.querySelector('.pe-rotate-handle')

      this.init()
   }

   // INIT
   init() {
      this.buttons.d.addEventListener(
         'click',
         function () {
            this.editor.remove(this.editor.getActive())
         }.bind(this)
      )

      this.buttons.d.querySelector('img').src = Icons.DeleteIcon
      this.buttons.r.querySelector('img').src = Icons.RotateIcon

      this.root.setAttribute('id', this.id)

      // SET RESIZE
      Interact.setResize(this)

      // SET DRAG
      Interact.setDrag(this)

      // SET ROTATE
      Interact.setRotate(this)
   }

   // LOCATE
   locate() {
      this.root.classList.add('pe-is-active')

      const component = this.editor.getActive()
      const type = component.type
      const options = ToolMaps[type].controller

      // DELETE
      // activate
      if (options.delete) this.buttons.d.style.display = 'unset'
      // hide
      else this.buttons.d.style.display = 'none'

      // ROTATE
      // activate
      if (options.delete) this.buttons.r.style.display = 'unset'
      // hide
      else this.buttons.r.style.display = 'none'

      // THUMBS
      if (options.thumbs) {
         this.root.classList.add('pe-is-resizable')
      }
      //hide
      else this.root.classList.remove('pe-is-resizable')

      // make visible
      this.root.classList.add('pe-is-active')

      // copy width
      this.style = { ...component.style }

      this.style.z = 9999
      this.style.transform.rotate = 0

      this.reload()
   }

   // reload to sync view
   reload() {
      this.root.style = StyleComposer(this.style)
   }

   // apply changes to the active component
   apply(bind = {}) {
      const { rotate } = bind
      const active = this.editor.getActive()

      const transform = {
         ...active.style.transform,
         rotate: rotate || active.style.transform.rotate,
      }

      active.style = {
         ...this.style,
         z: active.style.z,
         transform: { ...transform },
      }

      active.reload()
   }

   // resize
   resize(width, height) {
      this.style.width = width
      this.style.height = height
      this.apply()
      this.reload()
   }

   // rotate
   rotate(angle) {
      this.apply({ rotate: angle })
      this.reload()
   }

   // drag
   drag(left, top) {
      this.style.left = left
      this.style.top = top
      this.apply()
      this.reload()
   }
}
