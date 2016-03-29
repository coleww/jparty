import Ember from 'ember';

export default Ember.Route.extend({
  socketURL: null,
  model: function(params){
    return {id: params.game_id};
  }

});
