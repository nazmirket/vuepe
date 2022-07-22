// COPY ATTRIBUTE
export default {
   copyAttribute(from, to, attrName, fallback) {
      if (!from || !to) return
      to.setAttribute(attrName, from.getAttribute(attrName) || fallback)
   },
}
