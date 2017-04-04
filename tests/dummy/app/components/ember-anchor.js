import Ember from 'ember';
import EmberAnchor from 'ember-anchor/components/ember-anchor';

const { on } = Ember;

export default EmberAnchor.extend({
  onScrolledToElement: on('scrolledToElement', (element) => {
    element.addClass('highlight');
  })
});
