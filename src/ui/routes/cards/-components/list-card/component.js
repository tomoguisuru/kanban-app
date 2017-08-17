import Ember from 'ember';

const {
  Component,
} = Ember;

const ListCardComponent = Component.extend({
  tagName: 'li',
  classNames: ['card'],
  attributeBindings: ['draggable'],

  draggable: true,

  dragStart(event) {
    event.dataTransfer.setData('text/data', this.card.id);
    return true;
  },

});

export default ListCardComponent;
