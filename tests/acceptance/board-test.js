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

test('answers show value', function(assert) {
  assert.expect(5);
  for(var i=0;i<6;i++) server.create('category');
  visit('/');
  andThen(function() {
    assert.equal(find('.answer:contains("$200")').size(), 6);
    assert.equal(find('.answer:contains("$400")').size(), 6);
    assert.equal(find('.answer:contains("$600")').size(), 6);
    assert.equal(find('.answer:contains("$800")').size(), 6);
    assert.equal(find('.answer:contains("$1000")').size(), 6);
  });
});

test('board shows players', function(assert){
  visit('/');

  andThen(function(){
    assert.equal(find('.player').size(), 3);
  });
});
