/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Messages"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListMessages'
});

Router.route('/add', {
  name: 'AddMessage'
});

Router.route('/learn', {
  name: 'Learn'
});

Router.route('/messenger', {
  name: 'Messenger'
});


Router.route('/stuff/:_id', {
  name: 'EditMessage',
  data: function() { return Messages.findOne(this.params._id); }
});
