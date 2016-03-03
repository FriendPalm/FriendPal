/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var messSeeds = [
  {subject: "sub1", text: "Basket", sender: "user1", receiver: "user2"},
  {subject: "sub2", text: "Bicycle", sender: "user2", receiver: "user1"}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Messages.find().count() === 0) {
  _.each(messSeeds,  function(messages) {
    Messages.insert(messages);
  });
}
