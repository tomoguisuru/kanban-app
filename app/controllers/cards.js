import Ember from 'ember';

const {
  Controller,
  get,
  set,
  inject: { service },
} = Ember;

export default Controller.extend({

  store: service(),

  actions: {
    saveCard(list, title) {
      let card = get(this, 'store').createRecord('card', {
        list,
        title,
      });

      card.save();
    },

    updateCard(list, card) {
      set(card, 'list', list);

      card.save();
    }
  }
});
