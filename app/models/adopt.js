import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  services: DS.attr()
});
