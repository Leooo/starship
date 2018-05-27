import {readOnly, filterBy, not, gte, and} from '@ember/object/computed';
import Component from '@ember/component';
import {computed} from '@ember/object';
import {run} from '@ember/runloop';

export default Component.extend({
  lqTransitionedFrom: null,
  // Attributes
  premise: null,
  energyOrders: readOnly('premise.energyOrders'),
  orderItems: readOnly('premise.orderItems'),

  energyAccounts: readOnly('premise.energyAccounts'),
  servicesAccounts: readOnly('premise.servicesAccounts'),
  energyProductHoldings: readOnly('premise.energyProductHoldings'),
  servicesProductHoldings: readOnly('premise.servicesProductHoldings'),

  gasOrderItem: readOnly('premise.gasOrderItem'),
  electricityOrderItem: readOnly('premise.electricityOrderItem'),
  energyInsightEligibleAccount: readOnly('premise.energyInsightEligibleAccount'),
  isPrepayEnergyAccount: filterBy('energyAccounts', 'isPaymentTypePrepayment', true),
  hasPrepayEnergyAccount: gte('isPrepayEnergyAccount.length', 1),
  hasNoPrepayEnergyAccount: not('hasPrepayEnergyAccount'),

  hasSmartMeter: readOnly('premise.hasSmartMeter'),
  dumbMeterEnerygAccount: not('hasSmartMeter'),
  smartPrepay: and('hasPrepayEnergyAccount', 'hasSmartMeter'),
  dumbPrepay: and('hasPrepayEnergyAccount', 'dumbMeterEnerygAccount'),
  hasNoDumbPrepay: not('dumbPrepay'),

  initializedIsotope: false,
  dontAllowAmendPDIBBooking: computed(function () {
    return !this.get('features.allowAmendPDIBBooking');
  }),

  _initializeIsotope() {
    this.$('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'packery',
      packery: {
        gutter: 15
      }
    });
    this.set('initializedIsotope', true);
  },

  didInsertElement() {
    this._super(...arguments);
    this.set('initializedIsotope', false);
    run.scheduleOnce('afterRender', this, '_initializeIsotope');
  },

  didUpdate() {
    this._super(...arguments);
    if (!this.get('initializedIsotope')) {
      return true;
    }
    let $grid = this.$('.grid');
    $grid.one('layoutComplete', () => {
      run(() => {
        $grid.isotope({
          transitionDuration: '0.4s'
        });
      });
    });
    $grid.isotope('reloadItems');
    $grid.isotope({
      transitionDuration: 0
    });
    return true;
  },

  _cardToggled() {
    if (this.isDestroyed) {
      return false;
    }
    this.$('.grid').isotope('layout');
    this.$().trigger('resize');
    return true;
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.grid').isotope('destroy');
  },

  actions: {
    cardToggled() {
      run(() => {//need it for tests
        run.scheduleOnce('afterRender', this, this._cardToggled);
      });
    }
  }
});
