import {readOnly} from '@ember/object/computed';
import BaseCardComponent from '../base-expandable-card/component.base';

export default BaseCardComponent.extend({
  item: null,

  colors: {
    primary: 'dark-green',
    secondary: 'accent-green-light',
    hover: 'dark-green'
  }
});
