import { LayoutView } from 'backbone.marionette';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template: template,

  regions: {
    searchbox   : '.index__searchbox',
    cards       : '.index__cards'
  }

  // childEvents: {
  //   'show:message': 'onChildShowMessage',
  //   'submit:form': 'onChildSubmitForm'
  // },

  // onChildShowMessage: function (childView, message) {
  //   console.log('A child view fired show:message with ' + message);
  // },

  // onChildSubmitForm: function (childView) {
  //   console.log('A child view fired submit:form');
  // }
});
