import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('product', {path: '/product/:product_id'});
  this.route('store.hbs');
  this.route('store');
<<<<<<< HEAD
  this.route('cart');
=======
<<<<<<< HEAD
  this.route('cart');
=======
>>>>>>> dc39de4a64896411e8930d62a5f1caf57c60455a
>>>>>>> cf950e71d9b380c4c9122cb338ca22c44a4b4712
});

export default Router;
