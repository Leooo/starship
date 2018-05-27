import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('entry', {backgroundReload: false});
  }/*,
  actions: {
    onchangeResource(resourceName) {
      return this.transitionTo('select.resource-name', resourceName)
    }
  }*/
});
