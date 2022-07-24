import Component from './Component'
import ToolMaps from './ToolMaps'

export default class AudioComponent extends Component {
   constructor(editor, style, props) {
      super(editor, style, props)
   }

   create() {}

   getControllerOptions() {
      return ToolMaps.audio.controller
   }

   // get toolbar options
   getToolbarOptions() {
      return ToolMaps.audio.toolbar
   }
}
