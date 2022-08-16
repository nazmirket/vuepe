const families = [
   'Roboto',
   'Arial',
   'Josefin Sans',
   'Anton',
   'Pacifico',
   'Lobster',
   'Henny Penny',
   'Grenze Gotisch',
   'Bungee Shade',
   'Emilys Candy',
   'Great Vibes',
   'Limelight',
]

export default {
   loaded: false,
   fonts: [],
   load(fontSelector) {
      try {
         const WebFont = require('webfontloader')
         // if loaded return
         if (this.loaded) return
         // load fonts
         WebFont.load({
            // google fonts
            google: { families },
            // loading hook
            fontloading: function (family) {
               this.fonts.push(family)
               if (this.fonts.length === families.length) this.loaded = true
               if (fontSelector) fontSelector.setOptions(this.fonts)
            }.bind(this),
         })
      } catch (error) {
         console.log(error)
         console.log('error while loading fonts...')
      }
   },
}
