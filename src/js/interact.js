import Mutations from './Mutations'
import interact from 'interactjs'

export default {
   setResize(controller) {
      interact(controller.root).resizable({
         edges: {
            top: '.pe-thumb-top-left, .pe-thumb-top-right',
            left: '.pe-thumb-top-left, .pe-thumb-bottom-left',
            bottom: '.pe-thumb-bottom-right, .pe-thumb-bottom-left',
            right: '.pe-thumb-bottom-right, .pe-thumb-top-right',
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
   setRotate(rotateButton) {
      interact(rotateButton.root).draggable({
         onstart: function (e) {
            Mutations.rotate.start(rotateButton.controller, e)
         }.bind(this),
         onmove: function (e) {
            Mutations.rotate.move(rotateButton.controller, e)
         }.bind(this),
         onend: function (e) {
            Mutations.rotate.end(rotateButton.controller, e)
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
