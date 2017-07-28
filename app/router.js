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
  this.route('stories',{path: '/stories/:adopt_id'});
  this.route('pawfect', {path: '/pawfect/:adopt_id'});
});

export default Router;
