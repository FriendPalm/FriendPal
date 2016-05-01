/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      return true;
    } else {
      Meteor.settings.allowed_users.push(username);
      return true;
    }
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var accSeeds = [
  {
    _id: "DPj8No6mQEn4uoLpm",
    contacts: [
      "jhgjhg",
      "steven",
      "bob",
      "Alvin",
      "Theo",
      "Simon",
      "Brittany",
      "Eleanor",
      "Jeanette"],
    interests: [
      "Art"],
    profile: {
      name: "jondoe"
    }
  },
  {
    _id: "PEj8Ye6mYDn4ihLap",
    contacts: [
      "jhgjhg",
      "steven",
      "bob",
      "Alvin",
      "Theo",
      "Simon",
      "Brittany",
      "Eleanor",
      "Jeanette"],
    interests: [
      "Food"],
    profile: {
      name: "janedoe"
    }
  },
  {
    _id: "abcde",
    contacts: [
      "jhgjhg",
      "steven",
      "bob",
      "Alvin",
      "Theo",
      "Simon",
      "Brittany",
      "Eleanor",
      "Jeanette"],
    interests: [
      "Music"],
    profile: {
      name: "abcde"
    }
  },
  {
    _id: "WREhjhkjKJHKJ68JKHGsfddk",
    contacts: [
      "jhgjhg",
      "steven",
      "bob",
      "Alvin",
      "Theo",
      "Simon",
      "Brittany",
      "Eleanor",
      "Jeanette"],
    interests: [
      "Games"],
    profile: {
      name: "qwerrtyuyyt"
    }
  },
];


/**
 * Initialize the Stuff collection if empty with seed data.

 if (Accounts.find().count() === 0) {
  _.each(accSeeds,  function(dummyUser) {
    Accounts.insert(dummyUser);
  });
}
 */


