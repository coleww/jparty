import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  category_id: 1,
  question: 'this is a question',
  answer: 'answer',
  value: 200
});
