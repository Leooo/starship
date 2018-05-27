import Component from '@ember/component';

export default Component.extend({
  resourceHash: {},
  actions: {
    onchangeResource(resourceName) {
      this.attrs.onchangeResource(resourceName);
    }
  }
});
