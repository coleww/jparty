import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  displayTitle: function(){
    return this.get('title').toUpperCase();
  }.property('title')
});
