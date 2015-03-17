import Ember from 'ember';

export default Ember.Route.extend({
  players: Ember.inject.service('players'),
  model: function(){
    return this.modelFor('game');
  },
  actions: {
    ask: function(category, value){
      this.transitionTo('game.answer', category, value.get('value'));
      this.get('players').set('currentAnswer', value);
    }
  }
});
