import Ember from 'ember';

export default Ember.Route.extend({
  socketURL: null,
  players: Ember.inject.service('players'),
  model: function(){
    var randomOffset = ~~(Math.random() * 18100);
    return this.store.query('category', {count: 100, offset: randomOffset});
  },
  setupController: function(controller){
    controller.set('players', this.get('players'));
    this._super.apply(this, arguments);
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
