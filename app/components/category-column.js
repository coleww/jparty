import Ember from 'ember';
import layout from '../templates/components/category-column';

export default Ember.Component.extend({
  layout: layout,
  answerValues: Ember.A([200, 400, 600, 800, 1000])
});
