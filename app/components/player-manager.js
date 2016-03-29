import Ember from 'ember';
import layout from '../templates/components/player-manager';

export default Ember.Component.extend({
  classNames: ['players'],
  layout: layout,
  playerService: Ember.inject.service('players'),
  players: Ember.computed.alias('playerService.players'),
  activePlayers: Ember.computed.filterBy('players', 'active'),
  anyPlayersActive: Ember.computed.bool('activePlayers.length'),
  noPlayersActive: Ember.computed.not('anyPlayersActive'),
  actions: {
    assign: function(player){
      var answer = this.get('service.currentAnswer');
      player.incrementProperty('score', answer.get('value'));
      this.sendAction('endRound');
      this._savePlayers();
    },
    deduct: function(player){
      var answer = this.get('service.currentAnswer');
      player.decrementProperty('score', answer.get('value'));
      player.set('active', false);
      if(this.get('noPlayersActive')){
        this.sendAction('endRound');
      }
      this._savePlayers();
    },
    editName: function(player){
      player.set('editingName', true);
    },
    saveName: function(){
      this.get('players').invoke('set', 'editingName', false);
      this._savePlayers();
    }
  },
  _savePlayers: function(){
    this.get('playerService').savePlayers();
  }
});
