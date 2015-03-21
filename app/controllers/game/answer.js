import Ember from 'ember';
import upcase from '../../helpers/upcase';

export default Ember.Controller.extend({
  displayQuestion: upcase('model.question')
});
