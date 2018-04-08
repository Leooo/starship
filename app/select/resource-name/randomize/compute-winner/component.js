import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  list: [],
  maxResult: computed('list.[]', function () {
    let list = this.get('list');
    return list.reduce((accumulator, current) => {
      let st = String(current).toLowerCase();
      return st > accumulator ? st : accumulator;
    }, 'a');
  })
});
