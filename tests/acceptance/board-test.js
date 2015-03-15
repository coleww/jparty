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

test('board show names of categories', function(assert) {
  assert.expect(6);
  server.create('category', {title: 'animals'});
  server.create('category', {title: 'science'});
  server.create('category', {title: 'holidays \u0026 observances'});
  server.create('category', {title: 'before \u0026 after'});
  server.create('category', {title: 'american history'});
  server.create('category', {title: '3 letter words'});
  visit('/');

  andThen(function() {
    assert.equal(find('.category:contains("ANIMALS")').size(), 1);
    assert.equal(find('.category:contains("SCIENCE")').size(), 1);
    assert.equal(find('.category:contains("HOLIDAYS & OBSERVANCES")').size(), 1);
    assert.equal(find('.category:contains("BEFORE & AFTER")').size(), 1);
    assert.equal(find('.category:contains("AMERICAN HISTORY")').size(), 1);
    assert.equal(find('.category:contains("3 LETTER WORDS")').size(), 1);
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
