import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('game');
  },
  setupController: function(controller, model){
    var top_six = model.sortBy('clues_count').filter(function(item, index, enumerable){
      return index >= (enumerable.length - 6);
    }); // Grab the six categories with the most clues. //SERIALIZE HERE?!?!
    controller.set('model', top_six);
  }
});
