import StyleComposer from './StyleComposer'
import Style from './Style'

export default class RootStyle extends Style {
   constructor(props) {
      super(props)
   }

   toString() {
      return StyleComposer(this)
   }
}
