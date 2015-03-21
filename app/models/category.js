import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  displayTitle: function(){
    return this.get('title').toUpperCase();
  }.property('title'),
  clues_count: DS.attr('number'),

  answers: null,
  addAnswers: function(){
    var answers = Ember.A([
      Ember.Object.create({value: 200, asked: false}),
      Ember.Object.create({value: 400, asked: false}),
      Ember.Object.create({value: 600, asked: false}),
      Ember.Object.create({value: 800, asked: false}),
      Ember.Object.create({value: 1000, asked: false})
    ]);
    this.set('answers', answers);
  }.on('init')
});
