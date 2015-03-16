import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('answer', {category: params.category_id, value: params.answer_value});
  },
  setupController: function(controller, model){
    var answer = model.objectAt([~~(Math.random() * model.length)]);
    controller.set('model', answer);
  },
  actions: {
    pass: function(){
      this.transitionTo('game.index');
    }
  }
});
