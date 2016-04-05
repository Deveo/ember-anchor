import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

const { on } = Ember;

export default Ember.Component.extend(ViewSupport, {
  onScrolledToElement: on('scrolledToElement', element => {
    element.addClass('highlight');
  })
});
