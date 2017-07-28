import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing:false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    hideImage:function(){
      this.set('isImageShowing',false);
    },
    delete(vet){
      if(confirm("there is no going back")){
        this.sendAction('deletePup', vet);
      }
    }
  }
});
