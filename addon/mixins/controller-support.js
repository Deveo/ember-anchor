import Ember from 'ember';

const { computed, computed: { oneWay } } = Ember;

export function injectConfig() {
  return computed(function() {
    return this.container.lookup('config:ember-anchor');
  });
}

export default Ember.Mixin.create({
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
  _anchorConfig: injectConfig(),

  queryParams: computed('anchorQueryParam', function() {
    let qpValue = this.get('anchorQueryParam');
    return Ember.A(qpValue ? [qpValue] : []);
  })
});
