import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeProduct(product) {
      this.get('shoppingCart').remove(product)
<<<<<<< HEAD
    },
    empty(product) {
      this.get('shoppingCart').empty(product)
=======
<<<<<<< HEAD
    },
    empty(product) {
    this.get('shoppingCart').empty(product);
   }
=======
>>>>>>> cf950e71d9b380c4c9122cb338ca22c44a4b4712
    }
>>>>>>> dc39de4a64896411e8930d62a5f1caf57c60455a
  }
});
