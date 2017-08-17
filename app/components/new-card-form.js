import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  showForm: false,

  actions: {
    toggleForm() {
      set(this, 'showForm', true);
    },

    save(ev) {
      ev.preventDefault();

      this.onsubmit(this.list, this.title);

      this.setProperties({
        title: '',
        showForm: false,
      })
    }
  }
});
