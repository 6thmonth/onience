import { history } from 'backbone'
import {ItemView} from 'backbone.marionette';
import template from './item-template.hbs';

export default ItemView.extend({
  template: template,
  className: 'demo-card-wide mdl-card mdl-shadow--2dp',

  event: {
    'click a.mdl-button': 'goDetail'
  },

  goDetail() {
    history.navigate('detail/1', {
      trigger: true,
      replace: true
    })
  }
});
