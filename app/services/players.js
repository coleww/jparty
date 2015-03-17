import Ember from 'ember';

export default Ember.Service.extend({
  init: function(){
    this._super();
    this._setDefaultPlayers();
  },
  players: Ember.A([]),
  currentAnswer: null,
  answerWatcher: function(){
    if(this.get('currentAnswer')){
      this.get('players').invoke('set', 'active', true);
    }else {
      this.get('players').invoke('set', 'active', false);
    }
  }.observes('currentAnswer'),
  _setDefaultPlayers: function(){
    var players = Ember.A();
    for(var i=1;i<=3;i++){
      var player = Ember.Object.create({name: 'Player ' + i, score: 0, active: false});
      players.pushObject(player);
    }
    this.set('players', players);
  }
});
