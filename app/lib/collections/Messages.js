messages = "Messages";  // avoid typos, this string occurs many times.

Messages = new Mongo.Collection(messages);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addMessage: function(doc) {
    check(doc, Messages.simpleSchema());
    Messages.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editMessage: function(doc, docID) {
    check(doc, Messages.simpleSchema());
    Messages.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(messages, function () {
    return Messages.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Messages.attachSchema(new SimpleSchema({
  subject: {
    label: "subject",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: messages,
      placeholder: "Bicycle"
    }
  },
  text: {
    label: "text",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: messages,
      placeholder: "Bicycle"
    }
  },
  sender: {
    label: "from",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: messages,
      placeholder: "from"
    }
  },
  receiver: {
    label: "to",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: messages,
      placeholder: "to"
    }
  }
}));
