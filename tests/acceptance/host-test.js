import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'jparty/tests/helpers/start-app';

var application;

module('Acceptance: Host', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('host route shows current clue', function(assert) {
  visit('/host/abc123');

  var hostController = application.__container__.lookup('controller:host');
  hostController.send('onmessage', {data: "{\"q\":\"foo\",\"a\":\"bar\"}"});

  andThen(function() {
    assert.equal(find('.question:contains("foo")').size(), 1);
    assert.equal(find('.answer:contains("bar")').size(), 1);
  });
});
