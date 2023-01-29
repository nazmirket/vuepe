import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'

export default function create(editor, style, props, type, cid) {
   if (type === 'image') return new ImageComponent(editor, style, props, cid)
   if (type === 'text') return new TextComponent(editor, style, props, cid)
}
