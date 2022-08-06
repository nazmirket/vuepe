import View from './View'
import Icons from './Icons'

export default class AudioView extends View {
   isPlaying = false

   constructor(viewer, style, props) {
      super(viewer, style, props, 'audio')
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

   setStatus(isPlaying) {
      this.isPlaying = isPlaying
      if (this.isPlaying) this.root.classList.add('pe-is-on-play')
      else this.root.classList.remove('pe-is-on-play')
   }
}
