export default {
   image: function (component) {
      const wr = getWrapper(component.type)

      const el = document.createElement('img')
      el.src = component.props.src
      el.classList.add('pe-item')

      wr.appendChild(el)

      return wr.cloneNode(true)
   },
   video() {},
   text() {},
   audio() {},
}

function getWrapper(type) {
   const wr = document.createElement('div')
   wr.classList.add('pe-element', `pe-is-element-${type}`)
   return wr.cloneNode(true)
}
