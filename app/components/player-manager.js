import Ember from 'ember';
import layout from '../templates/components/player-manager';

export default Ember.Component.extend({
  layout: layout,
  actions: {
    assign: function(player){
      var answer = this.get('service.currentAnswer');
      player.set('score', answer.get('value'));
    }
  }
});
