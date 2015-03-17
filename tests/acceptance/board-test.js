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

test('board shows players with default names', function(assert){
  assert.expect(4);
  visit('/');

  andThen(function(){
    assert.equal(find('.player .name:contains("Player 1")').size(), 1);
    assert.equal(find('.player .name:contains("Player 2")').size(), 1);
    assert.equal(find('.player .name:contains("Player 3")').size(), 1);
    assert.equal(find('.player .score:contains("$0")').size(), 3);
  });
});

test('clicking an answer reveals it', function(assert) {
  assert.expect(2);
  var category = server.create('category');
  var answerJSON = {
    question: 'on this game show, contestants must reply in the form of a question.',
    category_id: category.id,
    value: 200
  };
  var answer = server.create('answer', answerJSON);
  visit('/');

  click('.answer:eq(0)');

  andThen(function() {
    assert.equal(find('.answer-revealed').text().replace(/^\s+|\s+$/g, ''), 'ON THIS GAME SHOW, CONTESTANTS MUST REPLY IN THE FORM OF A QUESTION.');
    assert.equal(currentRouteName(), 'game.answer');
  });
});

test('answer can be passed', function(assert) {
  assert.expect(2);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});
  visit('/');

  andThen(function(){
    assert.equal(find('.answer:eq(0)').text(), '$200');
  });

  click('.answer:eq(0)');
  click('.pass');

  andThen(function() {
    assert.equal(find('.answer:eq(0)').text(), '');
  });
});

test('answer value can be assigned to players score', function(assert) {
  assert.expect(2);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});

  visit('/');

  andThen(function() {
    assert.equal(find('.player .score:eq(0)').text().replace(/^\s+|\s+$/g, ''), '$0');
  });

  click('.answer:eq(0)');
  click('.player .assign:eq(0)');

  andThen(function() {
    assert.equal(find('.player .score:eq(0)').text().replace(/^\s+|\s+$/g, ''), '$200');
  });
});
