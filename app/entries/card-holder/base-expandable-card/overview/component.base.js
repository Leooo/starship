import {computed} from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: [
    'dashboard-account-card-overview',
    'text-center'
  ],
  textColor: computed('colors.primary', function () {
    if (this.get('colors.primary') === 'white') {
      return 'cyan';
    } else {
      return 'white';
    }
  }),
  click() {
    if (this.attrs.onclick) {
      this.attrs.onclick();
    }
  }
});
