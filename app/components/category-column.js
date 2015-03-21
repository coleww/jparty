import Ember from 'ember';
import layout from '../templates/components/category-column';

export default Ember.Component.extend({
  classNames: ['category-column'],
  layout: layout,
  actions: {
    ask: function(category, value){
      if (value.asked){
        return false;
      }
      this.sendAction('ask', category.get('id'), value);
      value.set('asked', true);
    }
  }
});
