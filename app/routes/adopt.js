import Ember from 'ember';


export default Ember.Route.extend({
  model(){
     return this.store.findAll('adopt');
  },
  actions:{
    deletePup(pup){
      pup.destroyRecord();
      this.transitionTo('adopt');
    },
    saveForm(params){
      var newPup= this.store.createRecord('adopt',params);
      newPup.save();
      this.transitionTo('adopt');
    }
  }
});
