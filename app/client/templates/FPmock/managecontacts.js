/**
 * Created by symor on 3/14/2016.
 */

// client
Meteor.subscribe("userData");

Template.ManageContacts.helpers({
  /**
   * @returns {*} all user accounts.
   */
  contactList: function () {
    return (Meteor.users.find());
  }
});
