import Ember from 'ember';

export default Ember.Component.extend({
  addNewProfile: false,
  actions:{
    showForm(){
      this.set('addNewProfile', true)
    },
    saveForm(){
      var params={
        name:this.get('name'),
        city:this.get('city'),
        image:this.get('image'),
      }
      this.set('addNewProfile',false);
      this.sendAction('saveForm', params);

    }
  }
});
