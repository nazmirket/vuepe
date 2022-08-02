import View from './View'

export default class ImageView extends View {
   constructor(viewer, style, props) {
      super(viewer, style, props)
   }

   create() {
      const wrapper = document.createElement('div')
      wrapper.classList.add('pe-element', 'pe-is-element-image')

      const element = document.createElement('img')
      element.src = this.props.src
      element.classList.add('pe-item')

      wrapper.appendChild(element)

      return wrapper.cloneNode(true)
   }
}
