import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {},
      modelName = primaryModelClass.modelName;
    normalizedPayload[modelName] = {properties: payload, id};
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
   }
});
