import View from './View'
import Icons from './Icons'

export default class AudioView extends View {
   audio = null

   constructor(viewer, style, props) {
      super(viewer, style, props, 'audio')
   }

   handlers = {
      // click listeners
      click: function () {
         this.play()
      }.bind(this),
      // play
      play: function () {
         this.setStatus(true)
      }.bind(this),
      // pause
      pause: function () {
         this.setStatus(false)
      }.bind(this),
   }

   init() {
      super.init()

      // play listener
      if (this.viewer.interactive) {
         this.audio = new Audio(this.props.src)

         this.audio.onplay = this.handlers.play
         this.audio.onpause = this.handlers.pause
         this.audio.onstop = this.handlers.pause
         this.audio.onerror = this.handlers.pause

         this.root.addEventListener('click', this.handlers.click)
      }
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

   play() {
      this.audio.play()
   }

   setStatus(isPlaying) {
      if (isPlaying) this.root.classList.add('pe-is-on-play')
      else this.root.classList.remove('pe-is-on-play')
   }
}
