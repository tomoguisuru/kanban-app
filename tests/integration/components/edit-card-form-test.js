import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-card-form', 'Integration | Component | edit card form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-card-form}}`);

  assert.equal(this.$().find('.test--edit-card-form').length > 0, true, 'Element did render');
});
