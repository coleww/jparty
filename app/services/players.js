import Ember from 'ember';

export default Ember.Service.extend({
  init: function(){
    this._super();
    if (!this.get('players.length')){
      // Why is this not being reset between tests?
      this._createDefaultPlayers();
    }
  },
  players: Ember.A([]),
  _createDefaultPlayers: function(){
    for(var i=1;i<=3;i++){
      var player = Ember.Object.create({name: 'Player ' + i, score: 0});
      this.get('players').pushObject(player);
    }
  }
});
