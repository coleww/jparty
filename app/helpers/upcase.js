import Ember from 'ember';

export function upcase(propertyName) {
  return Ember.computed(propertyName, function(){
    return this.get(propertyName).toUpperCase();
  });
}

export default upcase;
