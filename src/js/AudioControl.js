import Tool from './Tool.js'

export default class AudioControl extends Tool {
   audio
   src

   constructor(toolbar) {
      const root = toolbar.root.querySelector('.pe-audio-control')
      super(toolbar, root, 'ti013')

      this.audio = this.root.querySelector('audio')

      this.audio.addEventListener('play', this.handlers.play)
      this.audio.addEventListener('ended', this.handlers.pause)
      this.audio.addEventListener('error', this.handlers.pause)
      this.audio.addEventListener('pause', this.handlers.pause)
   }

   handlers = {
      pause: function () {
         this.setStatus(false)
      }.bind(this),
      play: function () {
         this.setStatus(true)
      }.bind(this),
   }

   load() {
      super.load()
      const active = this.getActive()
      this.src = active.props.src
      this.audio.src = this.src
   }

   setStatus(isPlaying) {
      const active = this.getActive()
      active.setStatus(isPlaying)
   }
}
