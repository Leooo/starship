import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    let property = params['property'],
      schema = this.modelFor('select.resource-name'),
      modelName = schema.id.singularize(),
      modelInstances = [],
      nbOfinstancesToFetch = schema.get('nbOfinstancesToFetch'),
      idCounter = schema.idCounter;
    for (var i=0; i<nbOfinstancesToFetch; i++) {
      modelInstances.push(this.store.findRecord(modelName, idCounter + i));
    }
    return RSVP.all(modelInstances).then((modelInstances) => {
      schema.set('idCounter', idCounter + nbOfinstancesToFetch);
      return modelInstances.map((modelInstance) => {
        return modelInstance.get('properties')[property];
      });
    }, () => {
      //not enough models in the API
      if (idCounter ===1) {
        schema.set('nbOfinstancesToFetch', nbOfinstancesToFetch - 1)
      } else {
        schema.set('idCounter', 1);
      }
      this.refresh();
    });
  }
});
