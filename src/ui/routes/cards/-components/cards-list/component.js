import Ember from 'ember';

const {
  Component,
} = Ember;

const CardsListComponent = Component.extend({
  tagName: 'ul',
  classNames: ['list'],

  dragOver() {
    return false;
  },

  drop(event) {
    let id = event.dataTransfer.getData('text/data');

    this.dropped(id);
  }
});

export default CardsListComponent;
