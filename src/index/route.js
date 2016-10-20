import { Collection } from 'backbone'
import {Route} from 'backbone-routing'
import SearchboxView from './searchbox/view'
import CardsView from './cards/collection-view'

export default Route.extend({
  initialize(options = {}) {
    this.layout = options.layout
    this.query = options.query
  },

  render() {
    this.searchboxView = new SearchboxView()
    this.layout.searchbox.show(this.searchboxView)

    if (this.query) {
      this.cardsView = new CardsView({
        collection: new Collection([{title: 1}])
      })

      this.layout.cards.show(this.cardsView)
    }
  }
});
