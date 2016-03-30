import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('game', {path: '/'}, function(){
    this.route('answer', {path: '/categories/:category_id/answer/:answer_value'});
  });
  this.route('host');
});

export default Router;
