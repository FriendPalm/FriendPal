/**
 * Created by symor on 3/14/2016.
 sample data set
 {
  _id: "bbca5d6a-2156-41c4-89da-0329e8c99a4f",  // Meteor.userId()
  username: "cool_kid_13", // unique name
  emails: [
    // each email address can only belong to one user.
    { address: "cool@example.com", verified: true },
    { address: "another@different.com", verified: false }
  ],
  createdAt: Wed Aug 21 2013 15:16:52 GMT-0700 (PDT),
  profile: {
    // The profile is writable by the user by default.
    name: "Joe Schmoe"
  },
  contacts: [
    {id: idnumber, name: friend1},
    {id: num, name: aname}
  ],
  services: {
    facebook: {
      id: "709050", // facebook id
      accessToken: "AAACCgdX7G2...AbV9AZDZD"
    },
    resume: {
      loginTokens: [
        { token: "97e8c205-c7e4-47c9-9bea-8e2ccc0694cd",
          when: 1349761684048 }
      ]
    }
  }
}
 */

if (Meteor.isServer) {
  Meteor.publish("userData", function () {
    return Meteor.users.find({},{fields: {'username': 1, 'contacts': 1}});
  });
}
if(Meteor.isClient){
  // client
  Meteor.subscribe("userData");
}
Meteor.methods({
  //start User setting manage
  updateProfile: function (newProfile) {
    Meteor.update(Meteor.user()._id, {
      $set: {
        profile: newProfile
      }
    })
  },
  updateContacts: function (updatedContacts) {
    Meteor.update(Meteor.user()._id, {
      $set: {
        contacts: updatedContacts
      }
    })
  },
  addContact: function (newContact) {
    Meteor.update(Meteor.user()._id, {
      $push: {
        contacts: {name: newContact}
      }
    })
  },
  deleteContact: function (contactName) {
    Meteor.update(Meteor.user()._id, {
      $pull: {
        contacts: contactName
      }
    })
  }
})