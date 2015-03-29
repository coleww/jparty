import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
  socketURL: null,
  model: function(params){
    return {id: params.game_id};
  },

  setupController: function(controller, model) {
    this.set('socketURL', 'ws://localhost:8080/room/' + model.id);
    this._super.apply(this, arguments);
  }

});
