import Ember from 'ember';

export default Ember.Route.extend({
  players: Ember.inject.service('players'),
  model: function(){
    return this.store.findAll('category');
  },
  setupController: function(controller, model){
    controller.set('model', model);
    controller.set('players', this.get('players'));
  },
  actions: {
    leavingAnswer: function(){
      this.get('players').set('currentAnswer', null);
    },
    endRound: function(){
      this.transitionTo('game.index'); // will trigger leavingAnswer
    },
    ask: function(category, value){
      this.transitionTo('game.answer', category, value.get('value'));
      this.get('players').set('currentAnswer', value);
    }
  }
});
