const WebFont = require('webfontloader')

export default {
   fonts: [],
   load(fontSelector) {
      WebFont.load({
         google: {
            families: [
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
            ],
         },
         fontloading: function (family) {
            this.fonts.push(family)
            fontSelector.setOptions(this.fonts)
         }.bind(this),
      })
   },
}
