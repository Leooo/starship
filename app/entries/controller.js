import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  queryParams: ['search', 'sortBy'],
  sortBy: [],
  search: null,
  itemsContainingSearchTerm: computed('items.@each.title', 'search', function () {
    let search = this.get('search'),
      items = this.get('model');
    if (!search){
      return items;
    }
    return items.filter((item) => {
      return item.get('title').includes(search);
    });
  }),
  itemsSorted: computed.sort('itemsContainingSearchTerm', 'sortBy'),
  actions: {
    onchangeResource(attr) {
      let arr = [];
      arr.pushObject(`${attr}:asc`);
      this.set('sortBy', arr);
    }
  }
});
