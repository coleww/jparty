import Ember from 'ember';

export function scoreDisplay(score) {
  var prefix = '$';
  if(score < 0){
    prefix = '-$';
  }
  return prefix + Math.abs(score);
}

export default Ember.HTMLBars.makeBoundHelper(scoreDisplay);
