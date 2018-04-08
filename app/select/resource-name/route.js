import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let modelName = params['resource-name'];
    return this.store.findRecord('schema', modelName);
  },
  actions: {
    onchangeResourceName(resourceName) {
      return this.transitionTo('select.resource-name.randomize', resourceName);
    }
  }
});
