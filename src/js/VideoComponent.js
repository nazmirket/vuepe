import Component from './Component'
import ToolMaps from './ToolMaps'

export default class VideoComponent extends Component {
   constructor(editor, style, props) {
      super(editor, style, props)
   }

   create() {}

   getControllerOptions() {
      return ToolMaps.video.controller
   }

   // get toolbar options
   getToolbarOptions() {
      return ToolMaps.video.toolbar
   }
}
