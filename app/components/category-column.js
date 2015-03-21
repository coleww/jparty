import Ember from 'ember';
import layout from '../templates/components/category-column';
import upcase from '../helpers/upcase';

export default Ember.Component.extend({
  classNames: ['category-column'],
  layout: layout,
  categoryTitle: upcase('category.title'),
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
