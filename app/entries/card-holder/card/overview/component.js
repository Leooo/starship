import BaseCardOverviewComponent from '../../base-expandable-card/overview/component.base';
import {computed} from '@ember/object';
import Ember from 'ember';

export default BaseCardOverviewComponent.extend({
  item: null,
  style: computed('item', function () {
    let url = this.get('item.cover_url')
    return Ember.String.htmlSafe(
        'background-image: url(' + url + '); background-repeat: no-repeat; background-size: 100% auto;'
    );
  }),
});
