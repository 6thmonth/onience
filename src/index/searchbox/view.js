import { history } from 'backbone'
import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
  template: template,
  className: 'container',

  // Events hash defines local event handlers that in turn may call `triggerMethod`.
  events: {
    'click #btn-search': 'goSearch'
  },

  // Triggers hash converts DOM events directly to view events catchable on the parent.
  triggers: {
    'submit form': 'submit:form'
  },

  goSearch: function () {
    // this.triggerMethod('show:message', 'foo');
    history.navigate('/?keyword=123', {
      trigger: true,
      replace: true
    })
  }
});
