import Ember from 'ember';
import layout from '../templates/components/player-manager';

export default Ember.Component.extend({
  layout: layout,
  players: Ember.computed.alias('service.players'),
  activePlayers: Ember.computed.filterBy('players', 'active'),
  anyPlayersActive: Ember.computed.bool('activePlayers.length'),
  noPlayersActive: Ember.computed.not('anyPlayersActive'),
  actions: {
    assign: function(player){
      var answer = this.get('service.currentAnswer');
      player.incrementProperty('score', answer.get('value'));
      this.sendAction('endRound');
    },
    deduct: function(player){
      var answer = this.get('service.currentAnswer');
      player.decrementProperty('score', answer.get('value'));
      player.set('active', false);
      if(this.get('noPlayersActive')){
        this.sendAction('endRound');
      }
    },
    editName: function(player){
      player.set('editingName', true);
    },
    saveName: function(){
      this.get('players').invoke('set', 'editingName', false);
    }
  }
});
