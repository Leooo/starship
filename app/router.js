import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('select', {path: '/play/'}, function () {
    this.route('resource-name', {path: '/:resource-name/'}, function () {
      this.route('randomize', {path: '/:property/'});
    });
  });
});

export default Router;
