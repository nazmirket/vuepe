// import icons
import AlignLeftIcon from '../icons/align-left.svg'
import AlignRightIcon from '../icons/align-right.svg'
import AlignCenterIcon from '../icons/align-center.svg'

// RGB TO HEX
export function rgbToHex(rgb) {
   try {
      if (!rgb) {
         return null
      }
      const rgbRegex = /rgb\((.*?), (.*?), (.*?)\)/

      const match = rgbRegex.exec(rgb)

      const r = match[1]
      const g = match[2]
      const b = match[3]

      const componentToHex = (c) => {
         const hex = parseInt(c, 10).toString(16)
         return hex.length == 1 ? `0${hex}` : hex
      }
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
   } catch (error) {
      return rgb
   }
}

// REPLACE TRANSLATE VALUE
export function replaceTranslate(str, x, y) {
   if (!str) {
      return `translate(${x},${y})`
   }
   const translateRegex = /translate\(.*,.*\)/
   if (!translateRegex.exec(str)?.length) {
      return `${str} translate(${x},${y})`
   }
   return `${str}`.replace(translateRegex, `translate(${x},${y})`)
}

// REPLACE ROTATE VALUE
export function replaceRotate(str, rad) {
   if (!str) {
      return `rotate(${rad}rad)`
   }
   const rotateRegex = /rotate\(.*rad\)/
   if (!rotateRegex.exec(str)?.length) {
      return `${str} rotate(${rad}rad)`
   }
   return `${str}`.replace(rotateRegex, `rotate(${rad}rad)`)
}

// TOGGLE FLIP HORIZONTAL
export function toggleFlipH(str) {
   if (!str) {
      return `scaleX(-1)`
   }
   const flipRegex = /scaleX\(-1\)/
   if (!flipRegex.exec(str)?.length) {
      return `${str} scaleX(-1)`
   }
   return `${str}`.replace(flipRegex, '')
}

// TOGGLE FLIP VERTICAL
export function toggleFlipV(str) {
   if (!str) {
      return `scaleY(-1)`
   }
   const flipRegex = /scaleY\(-1\)/
   if (!flipRegex.exec(str)?.length) {
      return `${str} scaleY(-1)`
   }
   return `${str}`.replace(flipRegex, '')
}

// GET DRAG ANGLE
export function getDragAngle(event, el) {
   // start value
   const startAngle = parseFloat(el?.getAttribute('data-angle')) || 0

   // find center
   const x = parseFloat(el?.getAttribute('data-center-x')) || 0
   const y = parseFloat(el?.getAttribute('data-center-y')) || 0

   // calc angle
   const angle = Math.atan2(y - event.clientY, x - event.clientX)

   // return difference
   return angle - startAngle
}

// GET EDITOR
export function getEditor(el) {
   let depth = 0
   while (!el?.classList?.contains('pe-editor')) {
      el = el?.parentElement
      depth++
      if (depth >= 50) {
         return null
      }
   }
   return el
}

// SET ACTIVE EDITOR
export function setActiveEditor(event) {
   // find current
   const editor = getEditor(event?.target)

   // return if not found
   if (!editor) return

   // deactivate others
   document
      .querySelectorAll('.pe-editor')
      .forEach((e) => e.classList.remove('pe-active-editor'))

   // activate current
   editor?.classList.add('pe-active-editor')
}

// GET ACTIVE EDITOR
export function getActiveEditor() {
   const activeEditor = document.querySelector('.pe-editor.pe-active-editor')
   return activeEditor
}

// GET EDITOR BY ID
export function getEditorById(id) {
   const editor = document.getElementById(id)

   if (!editor) return null

   if (!editor.classList.contains('pe-editor')) return null

   return editor
}

// GET CLOSEST PARENT
export function queryParent(el, cls) {
   let depth = 0
   while (!el?.classList?.contains(cls)) {
      el = el?.parentElement
      depth++
      if (depth >= 12) {
         return null
      }
   }
   return el
}

// GET MIN Z
export function getMinZ(page) {
   const elements = page.querySelectorAll('.pe-element')
   let min = 0
   for (const element of elements) {
      const z = parseInt(element.style['z-index']) || 0
      if (z <= min) min = z
   }
   return parseInt(min)
}

// GET MAX Z
export function getMaxZ(page) {
   const elements = page.querySelectorAll('.pe-element')
   let max = 0
   for (const element of elements) {
      const z = parseInt(element.style['z-index']) || 0
      if (z >= max) max = z
   }
   return parseInt(max)
}

// RAISE ALL
export function raiseAllElements(page) {
   const elements = page.querySelectorAll('.pe-element')
   elements.forEach(function (element) {
      const fixed = (parseInt(element.style['z-index']) || 0) + 1
      element.style['z-index'] = fixed
   })
}

// REGISTER CLICK
export function registerClick(query, handler, parent = document) {
   parent.querySelectorAll(query).forEach(function (el) {
      el.addEventListener('click', handler)
   })
}

// REGISTER CHANGE
export function registerChange(query, handler, parent = document) {
   parent.querySelectorAll(query).forEach(function (el) {
      el.addEventListener('change', handler)
   })
}

// REGISTER INPUT
export function registerInput(query, handler, parent = document) {
   parent.querySelectorAll(query).forEach(function (el) {
      el.addEventListener('input', handler)
   })
}

// RESOLVE TYPE
export function resolveType(element) {
   if (element?.classList.contains('pe-is-element-image')) return 'image'
   if (element?.classList.contains('pe-is-element-text')) return 'text'
   if (element?.classList.contains('pe-is-element-audio')) return 'audio'
   if (element?.classList.contains('pe-is-element-video')) return 'video'
}

// RESOLVE DROP TYPE
export function resolveDropType(element) {
   if (element?.classList.contains('pe-image-material')) return 'image'
   if (element?.classList.contains('pe-text-material')) return 'text'
   if (element?.classList.contains('pe-audio-material')) return 'audio'
   if (element?.classList.contains('pe-video-material')) return 'video'
}

// RESOLVE ALIGN ICON
export function resolveAlignIcon(alg) {
   switch (alg) {
      case 'right':
         return AlignRightIcon
      case 'left':
         return AlignLeftIcon
      case 'center':
         return AlignCenterIcon
      default:
         return AlignLeftIcon
   }
}

// COPY ATTR
export function copyAttribute(from, to, attrName, fallback) {
   if (!from || !to) {
      return
   }
   to.setAttribute(attrName, from.getAttribute(attrName) || fallback)
}

// TO JSON
export function parseJSON(data) {
   let temp
   try {
      temp = JSON.parse(data)
      return temp
   } catch (error) {
      return null
   }
}
