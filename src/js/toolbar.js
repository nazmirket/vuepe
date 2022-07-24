import FlipHorizontalButton from './FlipHorizontalButton.js'
import FlipVerticalButton from './FlipVerticalButton.js'
import FlipBackButton from './FlipBackButton.js'
import FlipFrontButton from './FlipFrontButton.js'
import OpacitySlider from './OpacitySlider.js'
import FontFamilySelect from './FontFamilySelect.js'
import FontSizeSelect from './FontSizeSelect.js'
import TextColorSelect from './TextColorSelect.js'
import TextAlignSelect from './TextAlignSelect.js'
import FontWeightToggle from './FontWeightToggle.js'
import FontItalicToggle from './FontItalicToggle.js'
import FontStrikeToggle from './FontStrikeToggle.js'

export default class Toolbar {
   root
   editor
   tools = []

   // constructor
   constructor(editor) {
      this.editor = editor
      this.root = this.editor.root.querySelector('.pe-toolbar')

      this.tools = [
         new FlipHorizontalButton(this),
         new FlipVerticalButton(this),
         new FlipBackButton(this),
         new FlipFrontButton(this),
         new OpacitySlider(this),
         new FontFamilySelect(this),
         new FontSizeSelect(this),
         new TextColorSelect(this),
         new TextAlignSelect(this),
         new FontWeightToggle(this),
         new FontItalicToggle(this),
         new FontStrikeToggle(this),
      ]
   }

   hide() {
      for (const tool of this.tools) tool.hide()
   }

   // load
   show() {
      for (const tool of this.tools) tool.load()
   }
}
