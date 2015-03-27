import Ember from 'ember';

export default Ember.Controller.extend({
  currentClue: null,
  actions: {
    onmessage: function(socketEvent){
      this.set('currentClue', JSON.parse(socketEvent.data));
    }
  }
});
