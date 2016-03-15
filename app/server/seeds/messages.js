/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var messSeeds = [
  {subject: "sub1", text: "Basket", sender: "user1", receiver: "user2", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "Bgfhicycle", sender: "user2", receiver: "user1", letter: "false", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "Bichgfycle", sender: "user2", receiver: "sy", letter: "false",created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "cBicycle", sender: "user2", receiver: "sy", letter: "false",created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "bBicycle", sender: "user2", receiver: "sy", letter: "false",created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "aBicyhhcle", sender: "user2", receiver: "sy", letter: "false",created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2ksaj", text: "Bihhhcycle", sender: "user2", receiver: "sy", letter: "false", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub1111", text: "Bichhycle", sender: "user2", receiver: "sy", letter: "false", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub8", text: "Bikjhhcycle", sender: "user2", receiver: "sy", letter: "false", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub7", text: "Bicyhhhcle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub6", text: "Biclhlkjhkljhycle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub5", text: "Bicyhgfhgfcle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub4", text: "Bicyhjgfhjgfcle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub3", text: "Bicygggggcle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub23", text: "Bicjhfhgfhjgycle", sender: "user2", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub22", text: "Bgnnicycle", sender: "foo", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub1", text: "Bicyclerider", sender: "foo", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub2", text: "Bicyclekjh", sender: "bar", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "s", text: "Bicyclkjhe", sender: "bar", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "su", text: "Bicyckjhle", sender: "bar", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},
  {subject: "sub", text: "Bicykjhcle", sender: "bar", receiver: "sy", letter: "true", created: moment().format("YYYYMMDDhmmss")},

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Messages.find().count() === 0) {
  _.each(messSeeds,  function(messages) {
    Messages.insert(messages);
  });
}
