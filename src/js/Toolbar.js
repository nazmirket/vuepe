import ToolMaps from './ToolMaps.js'

export default class Toolbar {
   root
   editor
   tools = {}

   // constructor
   constructor(editor) {
      this.editor = editor
      this.root = this.editor.root.querySelector('.pe-toolbar')
   }

   // show tool
   show(type) {}
   hide(type) {}

   // load
   load() {
      const active = this.editor.getActive()

      if (!active) return

      // actions
      const actions = active.actions

      // selected tools
      const ToolMap = ToolMaps[active.type]

      // t01 - Horizontal Flip
      this.tools.t01 = this.editor.root.querySelector('.pe-flip-horizontal')
      if (ToolMap.t01) {
         this.show('t01')
         this.tools.t01.addEventListener('click', actions['t01'])
      } else this.hide('t01')

      // t02 - Vertical Flip
      this.tools.t02 = this.editor.root.querySelector('.pe-flip-vertical')
      if (ToolMap.t02) {
         this.show('t02')
         this.tools.t02.addEventListener('click', actions['t02'])
      } else this.hide('t02')

      // t03 - Flip Back
      this.tools.t03 = this.editor.root.querySelector('.pe-flip-back')
      if (ToolMap.t03) {
         this.show('t03')
         this.tools.t03.addEventListener('click', actions['t03'])
      } else this.hide('t03')

      // t04 - Flip Back
      this.tools.t04 = this.editor.root.querySelector('.pe-flip-front')
      if (ToolMap.t04) {
         this.show('t04')
         this.tools.t04.addEventListener('click', actions['t04'])
      } else this.hide('t04')

      // t05 - Change Alpha
      this.tools.t05 = this.editor.root.querySelector('.pe-alpha-slider')
      if (ToolMap.t05) {
         this.show('t05')
         this.tools.t05.addEventListener('change', actions['t05'])
      } else this.hide('t05')

      // t06 - Change Font
      this.tools.t06 = this.editor.root.querySelector('.pe-change-font-select')
      if (ToolMap.t06) {
         this.show('t06')
         this.tools.t06.addEventListener('change', actions['t06'])
      } else this.hide('t06')

      // t07 - Change Font Size
      this.tools.t07 = this.editor.root.querySelector(
         '.pe-change-font-size-select'
      )
      if (ToolMap.t07) {
         this.show('t07')
         this.tools.t07.addEventListener('change', actions['t07'])
      } else this.hide('t07')

      // t08 - Change Text Color
      this.tools.t08 = this.editor.root.querySelector('.pe-change-color-picker')
      if (ToolMap.t08) {
         this.show('t08')
         this.tools.t08.addEventListener('change', actions['t08'])
      } else this.hide('t08')

      // t09 - Change Text Align
      this.tools.t09 = this.editor.root.querySelector('.pe-change-color-picker')
      if (ToolMap.t09) {
         this.show('t09')
         // right
         const right = this.tools.t09.querySelector('.pe-right-alg')
         right?.addEventListener('click', () => actions['t09']('start'))
         // left
         const left = this.tools.t09.querySelector('.pe-left-alg')
         left?.addEventListener('click', () => actions['t09']('center'))
         // center
         const center = this.tools.t09.querySelector('.pe-center-alg')
         center?.addEventListener('click', () => actions['t09']('end'))
      } else this.hide('t09')

      // t10 - Change Font Weight
      this.tools.t10 = this.editor.root.querySelector('.pe-toggle-bold')
      if (ToolMap.t10) {
         this.show('t10')
         this.tools.t10.addEventListener('click', actions['t10'])
      } else this.hide('t10')

      // t11 - Toggle Italic
      this.tools.t11 = this.editor.root.querySelector('.pe-toggle-italic')
      if (ToolMap.t11) {
         this.show('t11')
         this.tools.t11.addEventListener('click', actions['t11'])
      } else this.hide('t11')

      // t12 - Toggle Strike
      this.tools.t12 = this.editor.root.querySelector('.pe-toggle-strike')
      if (ToolMap.t12) {
         this.show('t12')
         this.tools.t12.addEventListener('click', actions['t12'])
      } else this.hide('t12')
   }
}
