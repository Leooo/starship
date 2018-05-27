import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  tagName: '',
  iten: null,
  title: computed('item', function () {
    let item = this.get('item'),
      description = item.get('description');
    return description.length ? description : "No description available for this item";
  })
});
