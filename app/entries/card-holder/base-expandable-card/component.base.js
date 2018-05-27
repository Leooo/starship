import Component from '@ember/component';
import {computed} from '@ember/object';
import {run} from '@ember/runloop';
import velocity from 'velocity';

export default Component.extend({

  reveal: false,
  hoverable: false,
  isExpanded: false,

  classNames: [
    'card',
    'dashboard-account-card',
    'grid-item'
  ],

  classNameBindings: [
    'hoverable',
    'isExpanded:is-expanded',
    'classNameLqTransitioned'
  ],

  lqTransitionedFrom: null,

  classNameLqTransitioned: computed('model', 'lqTransitionedFrom', function () {
    if (this.get('model') &&
      this.get('lqTransitionedFrom') &&
      this.get('model').constructor.modelName === this.get('lqTransitionedFrom')
    ) {
      return 'lq-card-transitioned';
    } else {
      return null;
    }
  }),

  mouseEnter() {
    if (!this.get('isExpanded')) {
      this.set('hoverable', true);
    }
  },

  mouseLeave() {
    this.set('hoverable', false);
  },

  toggleCard() {
    this.set('isExpanded', !this.get('isExpanded'));
    if (this.get('isExpanded')) {
      this.$('.grid-item-content').css('height', '270px');
      this.set('hoverable', false);
      // TODO: when there is an asv notification locally on top of the cardholder,
      // "afterRender" sometimes renders too early and the card height decreases instead of increasing
      // Ember.run.schedule('afterRender',
      run.next(this, function () {
        var gridItemContentContainer = this.$('.grid-item-content-container');
        var expandedHeight = 555;
        if (gridItemContentContainer.length) {
          expandedHeight = gridItemContentContainer.height() - 90;
        }

        velocity.animate(this.$('.grid-item-content'), {height: expandedHeight},
          {
            progress: (elements, complete) => {
              run(() => {
                if (complete > 0.25) {
                  this.sendAction('cardToggled');
                }
              });
            }
          }
        );
      });
    } else {
      velocity.animate(this.$('.grid-item-content'), {
        height: 270
      })
        .then(() => {
          this.sendAction('cardToggled');
        });
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$().off();
  },

  actions: {
    toggle() {
      this.toggleCard();
      this.set('reveal', true);
    }
  }

});
