import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import AudioComponent from './AudioComponent'

export default function create(editor, style, props, type, id) {
   if (type === 'image') return new ImageComponent(editor, style, props, id)
   if (type === 'audio') return new AudioComponent(editor, style, props, id)
   if (type === 'text') return new TextComponent(editor, style, props, id)
}
