export default class Style {
   z = 0
   left = 0
   top = 0
   width = 0
   height = 0
   opacity = 1
   transform = {
      translate: { x: 0, y: 0 },
      rotate: 0,
      scaleX: 1,
      scaleY: 1,
   }

   constructor(p = {}) {
      this.z = isNaN(p?.z) ? 0 : p.z

      // position
      this.left = isNaN(p?.left) ? 0 : p.left
      this.top = isNaN(p?.top) ? 0 : p.top

      // size
      this.width = isNaN(p?.width) ? 0 : p.width
      this.height = isNaN(p?.height) ? 0 : p.height

      // translate
      this.transform.translate.x = p?.transform?.translate?.x || 0
      this.transform.translate.y = p?.transform?.translate?.y || 0

      // rotate
      this.transform.rotate = p?.transform?.rotate || 0

      // horizantal flip
      this.transform.scaleX = p?.transform?.scaleX || 1
      this.transform.scaleY = p?.transform?.scaleY || 1
   }

   setTransform(p) {
      this.transform = { ...this.transform, ...p }
   }

   setSize(width, height) {
      this.width = width
      this.height = height
   }

   setOpacity(value) {
      this.opacity = value
   }

   setRotate(angle) {
      this.transform.rotate = angle
   }

   setPosition(left, top) {
      this.left = left
      this.top = top
   }

   setZ(z) {
      this.z = z
   }

   copy(p) {
      this.z = isNaN(p?.z) ? 0 : p.z

      // position
      this.left = isNaN(p?.left) ? 0 : p.left
      this.top = isNaN(p?.top) ? 0 : p.top

      // size
      this.width = isNaN(p?.width) ? 0 : p.width
      this.height = isNaN(p?.height) ? 0 : p.height

      // translate
      this.transform.translate.x = p?.transform?.translate?.x || 0
      this.transform.translate.y = p?.transform?.translate?.y || 0

      // rotate
      this.transform.rotate = p?.transform?.rotate || 0
   }
}
