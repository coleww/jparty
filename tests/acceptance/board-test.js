import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'jparty/tests/helpers/start-app';

var application;

module('Acceptance: Game Board', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('board shows categories', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.category').size(), 6);
  });
});

test('board shows answers', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.answer').size(), 30);
  });
});

test('board shows players', function(assert){
  visit('/');

  andThen(function(){
    assert.equal(find('.player').size(), 3);
  });
});
