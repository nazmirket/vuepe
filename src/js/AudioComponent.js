import Component from './Component'
import ToolMaps from './ToolMaps'
import Icons from './Icons'

export default class AudioComponent extends Component {
   isPlaying = false

   constructor(editor, style, props, cid) {
      super(editor, style, props, 'audio', cid)
   }

   create() {
      const wrapper = document.createElement('div')
      wrapper.classList.add('pe-element', 'pe-is-element-audio')

      const icon = document.createElement('img')
      icon.src = Icons.AudioIcon

      const element = document.createElement('span')

      element.appendChild(icon)
      element.classList.add('pe-item')

      wrapper.appendChild(element)

      return wrapper.cloneNode(true)
   }

   getControllerOptions() {
      return ToolMaps.audio.controller
   }

   getToolbarOptions() {
      return ToolMaps.audio.toolbar
   }

   setStatus(isPlaying) {
      this.isPlaying = isPlaying
      if (this.isPlaying) this.root.classList.add('pe-is-on-play')
      else this.root.classList.remove('pe-is-on-play')
   }
}
