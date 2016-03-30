import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('answer', {category: params.category_id, value: params.answer_value});
  },
  setupController: function(controller, model){
    var answer = model.objectAt([~~(Math.random() * model.length)]);

    // this should save to localStorage, host "reacts"?
    // this.send('emit', {q: answer.get('question'), a: answer.get('answer')}, true);



    controller.set('model', answer);
  },
  deactivate: function(){
    this.send('leavingAnswer');
  }
});
