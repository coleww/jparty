import {
  generateGameId
} from '../../../helpers/generate-game-id';
import { module, test } from 'qunit';

module('GenerateGameIdHelper');

test('it generates strings that are "random enough"', function(assert) {
  var results = {};
  for(var i = 0;i<1000;i++){
    results[generateGameId()] = true;
  }
  assert.equal(Object.keys(results).length, 1000);
});

test('it generates strings that are url safe', function(assert) {
  assert.expect(0);
  var results = [];
  for(var i = 0;i<1000;i++){
    results.push(generateGameId());
  }
  results.forEach(function(result){
    if(!result.match(/^[a-z][a-z0-9]+$/)){
      assert.ok(false, 'only lower case and numbers, begins with letter');
    }
  });
});