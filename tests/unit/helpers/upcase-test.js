import {
  upcase
} from '../../../helpers/upcase';
import { module, test } from 'qunit';
import Ember from 'ember';

module('UpcaseHelper');

test('it computes upcased strings', function(assert) {
  var classy = Ember.Object.extend({
    upcased: upcase('name')
  });
  var obj = classy.create({
    name: 'foo bar'
  });
  assert.equal(obj.get('upcased'), 'FOO BAR');
});
