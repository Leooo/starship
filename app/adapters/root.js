import applicationAdapter from './application';

export default applicationAdapter.extend({
  buildURL: function() {
    return `${this.get('host')}/`;
  }
});
