/**
 * Created by symor on 5/2/2016.
 */


Template.EditProfile.events = {
  'click .saveChanges': function(e, tmpl){
    let nBio = tmpl.find("#newBio").value;
    let nPic = tmpl.find("#newPic").value;
    let tempProfile = Meteor.user().profile;
    tempProfile.userBio = nBio;
    tempProfile.userPicture = nPic;
    Meteor.call("editProfile", tempProfile);
    Router.go('Settings');
  },
}
Template.EditProfile.helpers({
  /**
   * @returns {*} all user accounts.
   */
  getBio: function () {
    return Meteor.user().profile.userBio;
  },
  /**
   * @returns {*} all user accounts.
   */
  getPic: function () {
    return Meteor.user().profile.userPicture;
  },
});