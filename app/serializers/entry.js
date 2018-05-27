import applicationSerializer from "./application";

export default applicationSerializer.extend({
  /*payloadKeyFromModelName(modelName) {
    debugger;
  },
  modelNameFromPayloadKey(payloadKey) {
    debugger;
    if (payloadKey === 'blog/post') {
      return this._super(payloadKey.replace('blog/', ''));
    } else {
     return this._super(payloadKey);
    }
  }*/
});
