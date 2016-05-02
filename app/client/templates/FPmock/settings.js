/**
 * Created by symor on 4/11/2016.
 */

Template.Settings.events = {

  /*
  toggle user interests, calls the appropriate function to change the collection.
  e click event that is trigering the function
   */
  'click .toggleInterest': function (e) {
    if (e.currentTarget.checked) {
      var intName = e.currentTarget.id;
      Meteor.call("addInterest", intName);
    } else {
      var intName = e.currentTarget.id;
      Meteor.call("deleteInterest", intName)
    }
  },

  /*
  find three matches according to interests, with people sharing more interests having a higher likelihood of being chosen.
   */
  'click .newMatches': function () {

    let matchedUser, rand1, rand2, rand3;
    let holdArray = [];
    let matchedArray = [];

    /*
    looks through each user interest list, comparing the current user's interests and adding to the holdArray when a match is found. Each individual list item is compared, so users can be added multiple time to the holdArray (increasing their chances of being picked when the three matches are chosen)
    */
    Meteor.users.find().forEach(function (user) {
      _.forEach(Meteor.user().interests, function (item) {
        if (user._id !== Meteor.userId() && _.contains(user.interests, item)) {
          matchedUser = {
            name: user.username,
            for: item,
            pic: user.userPicture,
            bio: user.userBio
          };
          holdArray.push(matchedUser);
        }
      })
    });

    //choose matches and add them to userdata
    rand1 = Math.floor(Math.random() * holdArray.length);
    rand2 = Math.floor(Math.random() * holdArray.length);
    rand3 = Math.floor(Math.random() * holdArray.length);
    matchedArray.push(holdArray[rand1]);
    matchedArray.push(holdArray[rand2]);
    matchedArray.push(holdArray[rand3]);
    Meteor.call("setMatches", matchedArray);

  },
  'click .testButt': function(){
    console.log(Meteor.users.find().count());
    if (Meteor.users.find().count()<10){

      Accounts.createUser({username: "testUser0", password: "foo", profile: {name: "testuser0"}});
      Accounts.createUser({username: "testUser1", password: "foo", profile: {name: "testuser1"}});
      Accounts.createUser({username: "testUser2", password: "foo", profile: {name: "testuser2"}});
      Accounts.createUser({username: "testUser3", password: "foo", profile: {name: "testuser3"}});
      Accounts.createUser({username: "testUser4", password: "foo", profile: {name: "testuser4"}});
      Accounts.createUser({username: "testUser5", password: "foo", profile: {name: "testuser5"}});
      Accounts.createUser({username: "testUser6", password: "foo", profile: {name: "testuser6"}});
      Accounts.createUser({username: "testUser7", password: "foo", profile: {name: "testuser7"}});
      Accounts.createUser({username: "testUser8", password: "foo", profile: {name: "testuser8"}});
      Accounts.createUser({username: "testUser9", password: "foo", profile: {name: "testuser9"}});
    }
  }
}

Template.Settings.helpers({
  /**
   * @returns {*} all user accounts.
   */
  interestList: function () {
    return Meteor.user().interests;
  },
  getMatches: function(){
    return Meteor.user().matches;
  },
});