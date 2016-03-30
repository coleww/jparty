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

// test('host route shows current clue', function(assert) {
//   assert.expect(2);
//   visit('/host');

//   var hostController = application.__container__.lookup('controller:host');


//   andThen(function() {
//     assert.equal(find('.question:contains("foo")').size(), 1);
//     assert.equal(find('.answer:contains("bar")').size(), 1);
//   });
// });

// test('host route shows current players', function(assert) {
//   assert.expect(3);
//   visit('/host');
//   var hostController = application.__container__.lookup('controller:host');
//   hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});

//   andThen(function() {
//     assert.equal(find('.player:contains("Bob")').size(), 1);
//     assert.equal(find('.player:contains("Deb")').size(), 1);
//     assert.equal(find('.player:contains("Tim")').size(), 1);
//   });

// });

// test('assign/deduct buttons disappear after deduction', function(assert){
//   assert.expect(6);
//   visit('/host');
//   var hostController = application.__container__.lookup('controller:host');
//   var hostRoute = application.__container__.lookup('route:host');
//   hostRoute.reopen({
//     actions: {
//       emit:function(data){
//         assert.ok(!data.result.Bob);
//       }
//     }
//   });
//   andThen(function() {
//     hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});
//   });
//   andThen(function() {
//     assert.equal(find('.player .assign').size(), 3);
//     assert.equal(find('.player .deduct').size(), 3);
//   });

//   click('.player .deduct:eq(0)');

//   andThen(function() {
//     assert.equal(find('.pass').size(), 1);
//     assert.equal(find('.player .assign').size(), 2);
//     assert.equal(find('.player .deduct').size(), 2);
//   });
// });

// test('all buttons disappear after answer is passed', function(assert){
//   assert.expect(5);
//   visit('/host');
//   var hostController = application.__container__.lookup('controller:host');
//   hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});


//   andThen(function() {
//     assert.equal(find('.player .assign').size(), 3);
//     assert.equal(find('.player .deduct').size(), 3);
//   });

//   click('.pass');

//   andThen(function() {
//     assert.equal(find('.pass').size(), 0);
//     assert.equal(find('.player .assign').size(), 0);
//     assert.equal(find('.player .deduct').size(), 0);
//   });
// });

// test('all buttons disappear after assignment', function(assert){
//   assert.expect(6);
//   visit('/host');
//   var hostController = application.__container__.lookup('controller:host');

//   var hostRoute = application.__container__.lookup('route:host');
//   hostRoute.reopen({
//     actions: {
//       emit:function(data){
//         assert.ok(data.result.Bob);
//       }
//     }
//   });
//   andThen(function(){
//     hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});
//   });
//   andThen(function() {
//     assert.equal(find('.player .assign').size(), 3);
//     assert.equal(find('.player .deduct').size(), 3);
//   });

//   click('.player .assign:eq(0)');

//   andThen(function() {
//     assert.equal(find('.pass').size(), 0);
//     assert.equal(find('.player .assign').size(), 0);
//     assert.equal(find('.player .deduct').size(), 0);
//   });
// });

// test('buttons reappear upon new clue', function(assert){
//   assert.expect(9);
//   visit('/host');
//   var hostController = application.__container__.lookup('controller:host');
//   hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});

//   andThen(function() {
//     assert.equal(find('.pass').size(), 1);
//     assert.equal(find('.player .assign').size(), 3);
//     assert.equal(find('.player .deduct').size(), 3);
//   });

//   click('.pass');

//   andThen(function() {
//     assert.equal(find('.pass').size(), 0);
//     assert.equal(find('.player .assign').size(), 0);
//     assert.equal(find('.player .deduct').size(), 0);
//   });

//   andThen(function(){
//     hostController.send('onmessage', {data: "{\"clue\":{\"q\":\"foo\",\"a\":\"bar\"},\"players\": [{\"name\": \"Bob\"}, {\"name\": \"Deb\"}, {\"name\": \"Tim\"}]}"});
//   });

//   andThen(function() {
//     assert.equal(find('.pass').size(), 1);
//     assert.equal(find('.player .assign').size(), 3);
//     assert.equal(find('.player .deduct').size(), 3);
//   });
// });
