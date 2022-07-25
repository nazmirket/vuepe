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
               'Fredoka One',
               'Lobster',
               'Rampart One',
               'Henny Penny',
               'Grenze Gotisch',
               'Bungee Shade',
               'Emilys Candy',
               'Reggae One',
               'Faster One',
               'Fascinate Inline',
               'Great Vibes',
            ],
         },
         fontloading: function (family) {
            this.fonts.push(family)
            fontSelector.setOptions(this.fonts)
         }.bind(this),
      })
   },
}
