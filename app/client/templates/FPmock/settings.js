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
            name: user.profile.name,
            for: item,
            pic: user.profile.userPicture,
            bio: user.profile.userBio
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
  /*
  'click .testButt': function () {
    if (true) {
      console.log(Accounts.createUser({
        username: "testUser0",
        password: "foo",
        profile: {
          name: "testuser0",
          userPicture: "http://media.merchantcircle.com/28443728/headshot1cartoon_full.jpeg",
          userBio: "testUser0 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser1",
        password: "foo",
        profile: {
          name: "testuser1",
          userPicture: "http://thebrainygal.com/wp-content/uploads/2011/12/Green-Square-Headshot.png",
          userBio: "testUser1 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser2",
        password: "foo",
        profile: {
          name: "testuser2",
          userPicture: "http://www.jazybones.com/images/cartoon_avatar_2.png",
          userBio: "testUser2 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser3",
        password: "foo",
        profile: {
          name: "testuser3",
          userPicture: "http://tr.stockfresh.com/thumbs/noedelhap/3381907_siyah-beyaz-erkek-karikat%C3%BCr-kafa-g%C3%BClen-adam.jpg",
          userBio: "testUser3 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser4",
        password: "foo",
        profile: {
          name: "testuser4",
          userPicture: "http://www.tilingdiy.co.uk/wp-content/uploads/2014/05/Headshot.jpg",
          userBio: "testUser4 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser5",
        password: "foo",
        profile: {
          name: "testuser5",
          userPicture: "http://3.bp.blogspot.com/-2FpG-knoobo/TjWYM_Z-ERI/AAAAAAAAJGc/1RmowCIHyII/s1600/Bugs_bunny.jpg",
          userBio: "testUser5 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser6",
        password: "foo",
        profile: {
          name: "testuser6",
          userPicture: "http://www.abc.net.au/news/image/5826958-3x2-940x627.jpg",
          userBio: "testUser6 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser7",
        password: "foo",
        profile: {
          name: "testuser7",
          userPicture: "http://cliparts.co/cliparts/pTo/AEr/pToAEr48c.png",
          userBio: "testUser7 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser8",
        password: "foo",
        profile: {
          name: "testuser8",
          userPicture: "http://federazioneippica.org/wp-content/uploads/2013/02/HorseMascotCartoonHead.jpg",
          userBio: "testUser8 user Bio"
        }
      }));
      console.log(Accounts.createUser({
        username: "testUser9",
        password: "foo",
        profile: {
          name: "testuser9",
          userPicture: "http://eagleeye.umw.edu/wp-content/blogs.dir/3451/files/2010/08/Eagle_Cartoon.jpg",
          userBio: "testUser9 user Bio"
        }
      }));
    }
  }
  */
}

Template.Settings.helpers({
  /**
   * @returns {*} all user accounts.
   */
  interestList: function () {
    return Meteor.user().interests;
  },
  getMatches: function () {
    let mu = Meteor.user().matches;
    if (mu) return mu;
  },
  getBio: function() {
    return Meteor.user().profile.userBio;
  },
  getPic: function(){
    return Meteor.user().profile.userPicture
  }
});

Template.Settings.onRendered(function() {
  _.forEach(Meteor.user().interests, function(interest){
    document.getElementById(interest).setAttribute("checked", true);
  });
});