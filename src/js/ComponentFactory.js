import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import AudioComponent from './AudioComponent'

export default function create(editor, style, props, type) {
   if (type === 'image') return new ImageComponent(editor, style, props)
   if (type === 'audio') return new AudioComponent(editor, style, props)
   if (type === 'text') return new TextComponent(editor, style, props)
}
