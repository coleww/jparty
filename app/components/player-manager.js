import Ember from 'ember';
import layout from '../templates/components/player-manager';

export default Ember.Component.extend({
  layout: layout,
  actions: {
    assign: function(player){
      var answer = this.get('service.currentAnswer');
      player.incrementProperty('score', answer.get('value'));
    },
    deduct: function(player){
      var answer = this.get('service.currentAnswer');
      player.decrementProperty('score', answer.get('value'));
      player.set('active', false);
    }
  }
});
