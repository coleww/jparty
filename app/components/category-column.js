import Ember from 'ember';
import layout from '../templates/components/category-column';

export default Ember.Component.extend({
  layout: layout,
  actions: {
    ask: function(category, value){
      this.sendAction('ask', category.get('id'), value);
      value.set('asked', true);
    }
  }
});
