/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var messSeeds = [
  {subject: "sub1", text: "Basket", sender: "user1", receiver: "user2", letter: "true"},
  {subject: "sub2", text: "Bgfhicycle", sender: "user2", receiver: "user1", letter: "false"},
  {subject: "sub2", text: "Bichgfycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub2", text: "cBicycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub2", text: "bBicycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub2", text: "aBicyhhcle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub2ksaj", text: "Bihhhcycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub1111", text: "Bichhycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub8", text: "Bikjhhcycle", sender: "user2", receiver: "sy", letter: "false"},
  {subject: "sub7", text: "Bicyhhhcle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub6", text: "Biclhlkjhkljhycle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub5", text: "Bicyhgfhgfcle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub4", text: "Bicyhjgfhjgfcle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub3", text: "Bicygggggcle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub23", text: "Bicjhfhgfhjgycle", sender: "user2", receiver: "sy", letter: "true"},
  {subject: "sub22", text: "Bgnnicycle", sender: "foo", receiver: "sy", letter: "true"},
  {subject: "sub1", text: "Bicyclerider", sender: "foo", receiver: "sy", letter: "true"},
  {subject: "sub2", text: "Bicyclekjh", sender: "bar", receiver: "sy", letter: "true"},
  {subject: "s", text: "Bicyclkjhe", sender: "bar", receiver: "sy", letter: "true"},
  {subject: "su", text: "Bicyckjhle", sender: "bar", receiver: "sy", letter: "true"},
  {subject: "sub", text: "Bicykjhcle", sender: "bar", receiver: "sy", letter: "true"},

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Messages.find().count() === 0) {
  _.each(messSeeds,  function(messages) {
    Messages.insert(messages);
  });
}
