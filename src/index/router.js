import {Router} from 'backbone-routing'
import HeaderService from '../header/service'
import LayoutView from './layout-view'
import IndexRoute from './route'

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container
    this.listenTo(this, 'before:enter', this.onBeforeEnter);
  },

  onBeforeEnter() {
    HeaderService.request('activate', {
      path: ''
    });

    this.layoutView = new LayoutView()
    this.container.show(this.layoutView)
  },

  routes: {
    '': 'index'
  },

  index(query) {
    return new IndexRoute({
      layout: this.layoutView,
      query: query
    });
  }
});
