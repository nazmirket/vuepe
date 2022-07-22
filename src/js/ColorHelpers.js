// RGB TO HEX
export function RGBToHex(rgb) {
   try {
      if (!rgb) return null

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
