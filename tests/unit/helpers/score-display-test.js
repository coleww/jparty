import {
  scoreDisplay
} from '../../../helpers/score-display';
import { module, test } from 'qunit';

module('ScoreDisplayHelper');

// Replace this with your real tests.
test('it formats positive values', function(assert) {
  var result = scoreDisplay(42);
  assert.equal(result, '$42');
});

test('it formats negative values', function(assert) {
  var result = scoreDisplay(-42);
  assert.equal(result, '-$42');
});

test('it formats 0', function(assert) {
  var result = scoreDisplay(0);
  assert.equal(result, '$0');
});
