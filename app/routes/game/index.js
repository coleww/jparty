import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('game');
  },
  actions: {
    ask: function(category, value){
      this.transitionTo('game.answer', category, value);
    }
  }
});
