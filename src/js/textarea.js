import { rgbToHex, resolveAlignIcon } from './helpers.js'

import { families, sizes } from './fonts.js'

export function create(value) {
   const svg = document.createElement('svg')
   svg.setAttribute('viewBox', '0 0 56 18')
   svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

   const text = document.createElement('text')
   text.innerText = value
   text.setAttribute('x', '0')
   text.setAttribute('y', '15')
   text.style.fontFamily = families[0]
   text.style.fontSize = `${sizes.default}${sizes.unit}`
   text.contentEditable = true
   text.spellcheck = false
   text.style.width = '100%'
   text.style.height = '100%'

   svg.appendChild(text.cloneNode(true))
   return svg.cloneNode(true)
}

// INIT
export function init() {}

export function load(editor) {
   // find element
   const el = editor.querySelector('.pe-element.pe-is-active')

   // find item
   const text = el.querySelector('.pe-item')

   // load font family
   const fontPicker = editor.querySelector('.pe-change-font-select')
   fontPicker.value = `${text.style.fontFamily}`.replace(/[\"\']/g, '')

   // load font size
   const sizePicker = editor.querySelector('.pe-change-font-size-select')
   sizePicker.value = text.style.fontSize

   // load color
   const colorPicker = editor.querySelector('.pe-change-color-picker')
   colorPicker.value = rgbToHex(text.style.color) || '#000000'
   updateFontColorIndicator(editor, text.style.color || '#000000')

   // load bold
   const boldToggle = editor.querySelector('.pe-toggle-bold-btn')
   boldToggle.checked = text.classList.contains('pe-is-bold')

   // load italic
   const italicToggle = editor.querySelector('.pe-toggle-italic-btn')
   italicToggle.checked = text.classList.contains('pe-is-italic')

   // load strike
   const strikeToggle = editor.querySelector('.pe-toggle-strike-btn')
   strikeToggle.checked = text.classList.contains('pe-is-strike')

   // load align
   const alignSelected = editor.querySelector(
      '.pe-change-align .pe-align-selected'
   )
   alignSelected.src = resolveAlignIcon(text.style.textAlign)

   // load alpha
   const alphaSlider = editor.querySelector('.pe-alpha-slider')
   const alpha = isNaN(parseFloat(text.style.opacity))
      ? 1
      : parseFloat(text.style.opacity)
   alphaSlider.value = alpha * 100
}

// UPDATE FONT COLOR INDICATOR
export function updateFontColorIndicator(editor, color) {
   const indicator = editor.querySelector('.pe-color-indicator')
   indicator.style.backgroundColor = color
}
