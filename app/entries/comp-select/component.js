import Component from '@ember/component';

export default Component.extend({
  resourceHash: {
    title: 'title',
    'number of likes': 'likes'
  },
  actions: {
    onchangeResource(resourceName) {
      this.attrs.onchangeResource(resourceName);
    }
  }
});
