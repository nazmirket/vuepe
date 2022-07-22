import Mutations from './Mutations'
import interact from 'interactjs'

export default {
   setResize(controller) {
      interact(controller.root).resizable({
         edges: {
            top: '.pe-thumb.pe-thumb-tl, .pe-thumb.pe-thumb-tr',
            left: '.pe-thumb.pe-thumb-tl, .pe-thumb.pe-thumb-bl',
            bottom: '.pe-thumb.pe-thumb-br, .pe-thumb.pe-thumb-bl',
            right: '.pe-thumb.pe-thumb-br, .pe-thumb.pe-thumb-tr',
         },
         listeners: {
            move: function (e) {
               Mutations.resize(controller, e)
            }.bind(this),
            end: controller.editor.onChange,
         },
         modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
               outer: '.pe-page',
            }),
            // keep w/h ratio constant
            interact.modifiers.aspectRatio({
               ratio: 'preserve',
               modifiers: [interact.modifiers.restrictSize({ max: 'parent' })],
            }),
         ],
         inertia: false,
      })
   },
   setRotate(controller) {
      interact(controller.buttons.r).draggable({
         onstart: function (e) {
            Mutations.rotate.start(controller, e)
         }.bind(this),
         onmove: function (e) {
            Mutations.rotate.move(controller, e)
         }.bind(this),
         onend: function (e) {
            Mutations.rotate.end(controller, e)
         }.bind(this),
      })
   },
   setDrag(controller) {
      interact(controller.root).draggable({
         inertia: false,
         modifiers: [
            interact.modifiers.restrictRect({
               restriction: '.pe-page',
               endOnly: false,
            }),
         ],
         autoScroll: false,
         listeners: {
            move: function (e) {
               Mutations.drag(controller, e)
            }.bind(this),
            end: controller.editor.onChange,
         },
      })
   },
}
