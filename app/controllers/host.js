import Ember from 'ember';

export default Ember.Controller.extend({
  currentClue: null,
  players: Ember.inject.service('players'),
  active: false,
  actions: {
    onmessage: function(socketEvent){
      var data = JSON.parse(socketEvent.data);
      var players = Ember.A();
      data.players.forEach(function(player){
        player.active = true;
        players.pushObject(Ember.Object.create(player));
      });
      this.set('players', players);
      this.set('active', true);
      this.set('currentClue', data.clue);
    },
    assign: function(player){
      this.get('players').invoke('set', 'active', false);
      this.set('active', false);
      var result = {};
      result[player.name] = true;
      this.send('emit', {result: result}, true);
    },
    deduct: function(player){
      player.set('active', false);
      var result = {};
      result[player.name] = false;
      this.send('emit', {result: result}, true);
    },
    pass: function(){
      this.get('players').invoke('set', 'active', false);
      this.set('active', false);
    }
  }
});
