import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-list-form', 'Integration | Component | new list form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-list-form}}`);

  assert.equal(this.$().find('.test--new-list-form').length > 0, true, 'Element did render');
});
