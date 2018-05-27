import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.attr(),
  likes: DS.attr(),
  cover_url: DS.attr('string'),
  description: DS.attr('string'),
  date_created: DS.attr('date'),
  momentDate: Ember.computed('date_created', function () {
    let date = this.get('date_created');
    return moment(date).format('Do MMM YYYY');
  })
});
