/**
 * Created by symor on 4/11/2016.
 */
/**
 * Created by symor on 3/14/2016.
 */

Template.Settings.events = {

  'click .toggleInterest':function(e, tmpl){
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.checked);
    if(e.currentTarget.checked){
      var intName = e.currentTarget.id;
      Meteor.call("addInterest", intName);
    }else{
      var intName = e.currentTarget.id;
      Meteor.call("deleteInterest", intName)
    }
  }
}
Template.Settings.helpers({
  /**
   * @returns {*} all user accounts.
   */
  interestList: function () {
    return Meteor.users.find({_id: Meteor.user()._id}).fetch()[0].interests;
  }
});