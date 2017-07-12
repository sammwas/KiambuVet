import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('adopt');
  this.route('stories');
  this.route('pawfect', {path: '/pawfect/:rental_id'});
});

export default Router;
