const WebFont = require('webfontloader')

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
   },
}
