import Ember from 'ember';

export default Ember.Service.extend({
  init: function(){
    this._super();
    if (!this.get('players.length')){
      // Why is this not being reset between tests?
      this._setDefaultPlayers();
    }
  },
  players: Ember.A([]),
  _setDefaultPlayers: function(){
    var players = Ember.A();
    for(var i=1;i<=3;i++){
      var player = Ember.Object.create({name: 'Player ' + i, score: 0, active: false});
      players.pushObject(player);
    }
    this.set('players', players);
  }
});
