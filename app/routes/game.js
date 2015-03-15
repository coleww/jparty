import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.A([
      {"id":1633,"title":"crossword clues \"t\""},
      {"id":9057,"title":"pope-pourri"},
      {"id":3090,"title":"cockney rhyming slang"},
      {"id":3103,"title":"fade to \"black\""},
      {"id":17383,"title":"let's play some gulf"},
      {"id":10289,"title":"the new york times house \u0026 home"},
    ]);
  }
});
