import Ember from 'ember';

const {
  Controller,
} = Ember;

export default Controller.extend({

  actions: {
    updateCard(list, title) {
      this.model.setProperties({
        list,
        title,
      });

      this.model.save();
    },

    deleteCard() {
      this.model.destroyRecord().then(() => this.transitionToRoute('cards'));
    },
  }
});
