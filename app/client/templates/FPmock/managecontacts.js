/**
 * Created by symor on 3/14/2016.
 */

Template.ManageContacts.events = {
  'click .addContact': function(e, tmpl){
    var conName = tmpl.find("#newCon").value;
    Meteor.call("addContact", conName);
    tmpl.find("#newCon").value="";
  },
  'click .deleteContact': function(e, tmpl){
    var conName = e.target.previousSibling.data;
    Meteor.call("deleteContact", conName)
  }
}
Template.ManageContacts.helpers({
  /**
   * @returns {*} all user accounts.
   */
  contactList: function () {
    return Meteor.users.find({_id: Meteor.user()._id}).fetch()[0].contacts;
  }
});
