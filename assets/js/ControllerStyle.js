import StyleComposer from './StyleComposer'
import Style from './Style'

export default class ControllerStyle extends Style {
	constructor(style) {
		super(style)
	}

	toString() {
		return StyleComposer({
			z: 999999,
			left: this.left,
			top: this.top,
			width: this.width,
			height: this.height,
			transform: {
				translate: {
					x: this.transform.translate.x,
					y: this.transform.translate.y,
				},
				rotate: 0,
				scaleX: 1,
				scaleY: 1,
			},
		})
	}
}
