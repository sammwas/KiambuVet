import Ember from 'ember';


export default Ember.Route.extend({
  model(){
     return this.store.findAll('adopt');
  },
  actions:{
    deletePup(pup){
      pup.destroyRecord();
      this.transitionTo('adopt');
    }
  }
});
