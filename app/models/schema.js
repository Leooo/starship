import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  properties: DS.attr(),
  required: DS.attr(),
  idCounter: 1,
  nbOfinstancesToFetch: 2
});
