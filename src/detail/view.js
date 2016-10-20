import {ItemView} from 'backbone.marionette'
import template from './template.hbs'

export default ItemView.extend({
  template: template,
  tagName: 'section',
  className: 'detail'
})
