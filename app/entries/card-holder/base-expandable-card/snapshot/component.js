import {or} from '@ember/object/computed';
import Component from '@ember/component';
import {computed} from '@ember/object';
export default Component.extend({
  classNames: [
    'text-center',
    'dashboard-account-card-snapshot-container'
  ],
  promise: null,
  colors: {},
  title: null,
  subTitle: null,
  isExpanded: null,
  hoverColor: or(
    'colors.hover',
    'colors.primary'
  ),
  textColor: computed('colors.primary', function () {
    if (this.get('colors.primary') === 'white') {
      return 'cyan';
    } else {
      return 'white';
    }
  }),
  //https://coderwall.com/p/qkk2zq/components-with-structured-markup-in-ember-js-v1-10
  body: {isBody: true},
  link: {isLink: true}
});
