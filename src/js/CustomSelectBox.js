export default class CustomSelectBox {
   constructor(root, onChange) {
      this.root = root

      this.container = root.querySelector('.pe-selector-options')
      this.display = root.querySelector('.pe-selector-display')
      this.label = root.querySelector('.pe-selector-label')
      this.selected = null
      this.onChange = onChange
      this.options = []

      this.display.addEventListener('click', this.handlers.click)
   }

   handlers = {
      click: function (event) {
         this.toggle()
      }.bind(this),
      change: function (event) {
         const selected = event.target.getAttribute('data-value')
         this.onChange(selected)
         this.hide()
         this.refresh()
      }.bind(this),
   }

   set(selected) {
      this.selected = this.options.find((o) => o.value === selected)
      this.refresh()
   }

   refresh() {
      this.label.innerText = this.selected?.value || ''
      this.label.style = this.selected?.style || ''
   }

   clear() {
      this.container.innerHTML = ''
      this.options = []
      this.refresh()
   }

   show() {
      this.root.classList.add('pe-is-active')
   }

   hide() {
      this.root.classList.remove('pe-is-active')
   }

   toggle() {
      this.root.classList.toggle('pe-is-active')
   }

   setOptions(options) {
      this.clear()

      this.options = options

      for (const { value, style = '' } of this.options) {
         const element = document.createElement('span')
         element.setAttribute('data-value', value)
         element.style = style
         element.innerText = value
         element.classList.add('pe-selector-option')
         element.addEventListener('click', this.handlers.change)
         this.container.appendChild(element)
      }

      this.refresh()
   }
}
