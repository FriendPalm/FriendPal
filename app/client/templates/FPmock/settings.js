/**
 * Created by symor on 4/11/2016.
 */

Template.Settings.events = {

  'click .toggleInterest': function (e, tmpl) {
    if (e.currentTarget.checked) {
      var intName = e.currentTarget.id;
      Meteor.call("addInterest", intName);
    } else {
      var intName = e.currentTarget.id;
      Meteor.call("deleteInterest", intName)
    }
  },
  'click .testButt': function () {
    console.log();
    let matchedUser, rand1, rand2, rand3;
    let holdArray = [];
    let matchedArray = [];
    Meteor.users.find().forEach(function (user) {
      _.forEach(Meteor.user().interests, function (item) {
        if (user._id !== Meteor.userId() && _.contains(user.interests, item)) {
          matchedUser = {
            name: user.username,
            for: item,
            pic: "http://icons.iconarchive.com/icons/artua/dragon-soft/256/User-icon.png"
          };
          holdArray.push(matchedUser);
        }
      })
    });
    rand1 = Math.floor(Math.random() * holdArray.length);
    rand2 = Math.floor(Math.random() * holdArray.length);
    rand3 = Math.floor(Math.random() * holdArray.length);
    matchedArray.push(holdArray[rand1]);
    matchedArray.push(holdArray[rand2]);
    matchedArray.push(holdArray[rand3]);
    Meteor.call("setMatches", matchedArray);
    document.getElementById("match1").innerHTML = Meteor.user().matches[0].name;
    document.getElementById("match2").innerHTML = Meteor.user().matches[1].name;
    document.getElementById("match3").innerHTML = Meteor.user().matches[2].name;
  },
}

Template.Settings.helpers({
  /**
   * @returns {*} all user accounts.
   */
  interestList: function () {
    return Meteor.user().interests;
  },
});