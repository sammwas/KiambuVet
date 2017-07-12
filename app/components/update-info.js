import Ember from 'ember';

export default Ember.Component.extend({
  updateInfo:false,
  actions:{
    upDateForm(){
      this.set('updateInfo',true);
    },
    updateForm1(pup){
      var params={
        name:this.get('name'),
        city:this.get('city'),
        image:this.get('image'),
      };
      this.set('updateInfo',false);
      this.sendAction('updateForm1',pup,params);

    }
  }
});
