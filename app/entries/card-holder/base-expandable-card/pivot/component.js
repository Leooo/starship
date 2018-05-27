import {or} from '@ember/object/computed';
import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  tagName: '',
  hoverColor: or(
    'colors.hover',
    'colors.primary'
  ),
  pivotType: '',
  snapshotTitleSizeClass: '',
  titleSizeClass: computed('snapshotTitleSizeClass', function () {
    return 'font-size-7 mb0';
  }),
  promise: null,
  //https://coderwall.com/p/qkk2zq/components-with-structured-markup-in-ember-js-v1-10
  body: {isBody: true},
  link: {isLink: true},
  isSplit: false
});
