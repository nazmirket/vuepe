import Regexes from './Regexes'

// TRANSLATE
export function translate(element, x, y) {
   const transform = element.style.transform

   // initial value
   if (!transform) {
      element.style.transform = `translate(${x},${y})`
   }

   // add transformation
   if (!Regexes.translate.exec(transform)?.length) {
      element.style.transform = `${transform} translate(${x},${y})`
   }

   // update transformation
   else {
      element.style.transform`${transform}`.replace(
         Regexes.translate,
         `translate(${x},${y})`
      )
   }
}

// ROTATE
export function rotate(element, r) {
   const transform = element.style.transform

   // initial value
   if (!transform) {
      element.style.transform = `rotate(${r}rad)`
   }

   // add transformation
   if (!Regexes.rotate.exec(transform)?.length) {
      element.style.transform = `${transform} rotate(${r}rad)`
   }

   // update transformation
   else {
      element.style.transform`${transform}`.replace(
         Regexes.rotate,
         `rotate(${r}rad)`
      )
   }
}

// FLIP
export function flip(element, orientation) {
   const transform = element.style.transform

   // HORIZONTAL FLIP
   if (orientation === 'h') {
      // initial value
      if (!transform) {
         element.style.transform = `scaleX(-1)`
      }

      // add transformation
      if (!Regexes.flip.h.exec(transform)?.length) {
         element.style.transform = `${transform} scaleX(-1)`
      }
      // update transformation
      else {
         element.style.transform`${transform}`.replace(Regexes.flip.h, '')
      }
   }

   // VERTICAL FLIP
   if (orientation === 'v') {
      // initial value
      if (!transform) {
         element.style.transform = `scaleY(-1)`
      }

      // add transformation
      if (!Regexes.flip.v.exec(transform)?.length) {
         element.style.transform = `${transform} scaleY(-1)`
      }
      // update transformation
      else {
         element.style.transform`${transform}`.replace(Regexes.flip.v, '')
      }
   }
}
