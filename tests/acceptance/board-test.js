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

test('board show names of 6 categories', function(assert) {
  localStorage.clear();
  assert.expect(7);
  server.create('category', {title: 'animals'});
  server.create('category', {title: 'science'});
  server.create('category', {title: 'holidays \u0026 observances'});
  server.create('category', {title: 'before \u0026 after'});
  server.create('category', {title: 'american history'});
  server.create('category', {title: '3 letter words'});
  server.create('category', {title: 'NONO', clues_count: 5});
  visit('/');

  andThen(function() {
    assert.equal(find('.category:contains("ANIMALS")').size(), 1);
    assert.equal(find('.category:contains("SCIENCE")').size(), 1);
    assert.equal(find('.category:contains("HOLIDAYS & OBSERVANCES")').size(), 1);
    assert.equal(find('.category:contains("BEFORE & AFTER")').size(), 1);
    assert.equal(find('.category:contains("AMERICAN HISTORY")').size(), 1);
    assert.equal(find('.category:contains("3 LETTER WORDS")').size(), 1);
    assert.equal(find('.category').size(), 6);
  });
});

test('answers show value', function(assert) {
  localStorage.clear();
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

test('board shows players with default names, which can be changed', function(assert){
  localStorage.clear();
  assert.expect(5);
  visit('/');
  andThen(function(){
    assert.equal(find('.player .name:contains("Player 1")').size(), 1);
    assert.equal(find('.player .name:contains("Player 2")').size(), 1);
    assert.equal(find('.player .name:contains("Player 3")').size(), 1);
    assert.equal(find('.player .score:contains("$0")').size(), 3);
  });
  click('.player .name:eq(0)');
  fillIn('.player .edit-name:eq(0)', 'Ned');
  keyEvent('.player .edit-name:eq(0)', 'keyup', 13);

  andThen(function(){
    assert.equal(find('.player .name:contains("Ned")').size(), 1);
  });
});

test('clicking an answer reveals it', function(assert) {
  localStorage.clear();
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

test('answer can be passed, which hides assign/deduct buttons', function(assert) {
  localStorage.clear();
  assert.expect(4);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});
  visit('/');

  andThen(function(){
    assert.equal(find('.answer:eq(0)').text().replace(/^\s+|\s+$/g, ''), '$200');
  });

  click('.answer:eq(0)');
  click('.pass');

  andThen(function() {
    assert.equal(currentRouteName(), 'game.index');
    assert.equal(find('.player .assign').size(), 0);
    assert.equal(find('.player .deduct').size(), 0);
  });
});

test('answer value can be assigned to players score, which ends the answer, and hides assign/deduct buttons', function(assert) {
  localStorage.clear();
  assert.expect(5);
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
    assert.equal(currentRouteName(), 'game.index');
    assert.equal(find('.player .assign').size(), 0);
    assert.equal(find('.player .deduct').size(), 0);
  });
});

test('answer value can be deducted from players score', function(assert) {
  localStorage.clear();
  assert.expect(2);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});

  visit('/');

  andThen(function() {
    assert.equal(find('.player .score:eq(1)').text().replace(/^\s+|\s+$/g, ''), '$0');
  });

  click('.answer:eq(0)');
  click('.player .deduct:eq(1)');

  andThen(function() {
    assert.equal(find('.player .score:eq(1)').text().replace(/^\s+|\s+$/g, ''), '-$200');
  });
});

test('assign/deduct buttons disappear after use', function(assert){
  localStorage.clear();
  assert.expect(6);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});

  visit('/');

  andThen(function() {
    assert.equal(find('.player .assign').size(), 0);
    assert.equal(find('.player .deduct').size(), 0);
  });

  click('.answer:eq(0)');

  andThen(function() {
    assert.equal(find('.player .assign').size(), 3);
    assert.equal(find('.player .deduct').size(), 3);
  });

  click('.player .deduct:eq(0)');

  andThen(function() {
    assert.equal(find('.player .assign').size(), 2);
    assert.equal(find('.player .deduct').size(), 2);
  });
});


test('deducting points from all players closes the answer', function(assert){
  localStorage.clear();
  assert.expect(1);
  var category = server.create('category');
  var answer = server.create('answer', {category_id: category.id});

  visit('/');
  click('.answer:eq(0)');
  click('.deduct');
  andThen(function() {
    assert.equal(currentRouteName(), 'game.index');
  });
});

test('board shows link for host', function(assert){
  localStorage.clear();
  assert.expect(1);
  visit('/');
  andThen(function(){
    assert.equal(find('a:contains("host")').size(), 1);
  });
});