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
    },
    updateForm1(pup,params){
      Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      pup.set(key,params[key]);
    }
  });
  pup.save();
  this.transitionTo('adopt');
},
saveReview(params){
  var newRating=this.store.createRecord('review',params);
  newRating.save();
  this.transitionTo('adopt');
}
  }
});
