import ImageView from './ImageView'
import TextView from './TextView'

export default function create(viewer, style, props, type) {
	if (type === 'image') return new ImageView(viewer, style, props)
	if (type === 'text') return new TextView(viewer, style, props)
}
