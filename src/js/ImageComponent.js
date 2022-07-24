import Component from './Component'
import ToolMaps from './ToolMaps'

export default class ImageComponent extends Component {
   constructor(editor, style, props) {
      super(editor, style, props)
   }

   create() {
      const wrapper = document.createElement('div')
      wrapper.classList.add('pe-element', 'pe-is-element-image')

      const element = document.createElement('img')
      element.src = this.props.src
      element.classList.add('pe-item')

      wrapper.appendChild(element)

      return wrapper.cloneNode(true)
   }

   getControllerOptions() {
      return ToolMaps.image.controller
   }

   // get toolbar options
   getToolbarOptions() {
      return ToolMaps.image.toolbar
   }
}
