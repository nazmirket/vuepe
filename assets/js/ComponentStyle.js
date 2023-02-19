import StyleComposer from './StyleComposer'
import Style from './Style'

export default class ComponentStyle extends Style {
	constructor(props) {
		super(props)
	}

	toString() {
		return StyleComposer(this)
	}
}
