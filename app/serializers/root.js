import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {root: {resourceHash: payload}};
    id = 'root-id';
    normalizedPayload.root['id'] = id;
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
   }
});
