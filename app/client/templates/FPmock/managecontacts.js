/**
 * Created by symor on 3/14/2016.
 */


Template.Messenger.events = {
  'click .addContact': function(tmpl){
    tmpl.find("#newCon").value;
  }
}
Template.ManageContacts.helpers({
  /**
   * @returns {*} all user accounts.
   */
  contactList: function () {
    return (Meteor.users.find());
  }
});
