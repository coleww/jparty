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

