import Ember from 'ember';

const {
  Component,
} = Ember;

export default Component.extend({

  classNames: ['test--edit-card-form'],

  actions: {
    save(ev) {
      ev.preventDefault();

      this.onsubmit(this.list, this.title);
    }
  }
});
