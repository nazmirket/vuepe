import { init as initAudio } from './audio.js'
export function reload() {
   const previews = document.querySelectorAll('.pe-preview')

   for (const preview of previews) {
      const observer = new MutationObserver(function() {
         // init audio
         initAudio()
      })

      observer.observe(preview, {
         characterData: true,
         childList: true,
         attributes: true,
      })
   }
}
