import Ember from 'ember';
import generateGameId from '../helpers/generate-game-id';

export default Ember.Route.extend({
  socketURL: null,
  players: Ember.inject.service('players'),
  model: function(){
    var randomOffset = ~~(Math.random() * 18100);
    return this.store.find('category', {count: 100, offset: randomOffset});
  },
  setupController: function(controller){
    var gameId = generateGameId();
    this.set('socketURL', 'ws://localhost:8080/room/' + gameId);
    this._super.apply(this, arguments);
    controller.set('players', this.get('players'));
    controller.set('hostUrl', 'host/'+gameId);
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
