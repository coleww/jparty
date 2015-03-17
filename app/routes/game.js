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
    pass: function(){
      this.get('players').set('currentAnswer', null);
      this.transitionTo('game.index');
    },
    endRound: function(){
      this.transitionTo('game.index');
    }
  }
});
