/**
 * Created by symor on 5/6/2016.
 */
Template.Banner.helpers({

  getUserCount: function () {
    return Meteor.users.find().fetch().length;
  },
  getLangCount:function(){
    return 1;
  },
  getOnlineCount: function(){
    return 1;
  }
});