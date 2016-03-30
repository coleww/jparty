import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('category-column', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  Ember.run(function() {
    var category = Ember.Object.create({title: 'cats'});
    component.set('category', category);
  });

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
