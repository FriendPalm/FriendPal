/**
 * Created by symor on 3/14/2016.
 */

Template.ManageContacts.events = {
  'click .addContact': function(e, tmpl){
    var conName = tmpl.find("#newCon").value;
    Meteor.call("addContact", conName);
    tmpl.find("#newCon").value="";
  }
}
Template.ManageContacts.helpers({
  /**
   * @returns {*} all user accounts.
   */
  contactList: function () {
    return (Meteor.users.find().profile.contacts);
  }
});
