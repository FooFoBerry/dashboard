App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Em.RSVP.hash({
      ghNotifications: this.store.find('GHNotification'),
      users: this.store.find('user')
    });
  }
});
