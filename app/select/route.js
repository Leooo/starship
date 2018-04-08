import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('root', {backgroundReload: false}).then((arr) => {
      return arr.get('firstObject');
    });
  },
  actions: {
    onchangeResource(resourceName) {
      return this.transitionTo('select.resource-name', resourceName)
    }
  }
});
