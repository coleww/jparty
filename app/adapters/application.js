import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.api_host || '',
  namespace: ENV.api_namespace || '',
});
