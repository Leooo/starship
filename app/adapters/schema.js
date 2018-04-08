import applicationAdapter from './application';

export default applicationAdapter.extend({
  buildURL: function(record, suffix) {
    return `${this.get('host')}/${suffix}/schema`;
  }
});
