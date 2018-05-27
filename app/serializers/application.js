import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {},
      modelName = primaryModelClass.modelName,
      primaryKey = this.get('primaryKey');
    normalizedPayload[modelName] = payload;
    id = id.toLowerCase().pluralize();
    payload[primaryKey] = id;
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  }
});
