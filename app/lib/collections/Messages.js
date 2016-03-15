messages = "Messages";  // avoid typos, this string occurs many times.

Messages = new Mongo.Collection(messages);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addMessage: function (doc) {
    check(doc, Messages.simpleSchema());
    Messages.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editMessage: function (doc, docID) {
    check(doc, Messages.simpleSchema());
    Messages.update({_id: docID}, doc);
  },
  /**
   * markes the deleted field of the active message
   * @param docId _id of the active item
   */
  deleteMessage: function (docID) {
    Messages.update(docID, {
      $set: {
        deleted: "true",
        deletedDate: moment().format("YYYYMMDDhmmss")
      }
    });
  },
  /**
   * marks the active document as read
   * @param docID _id of the active item
   */
  markRead: function (docID) {
    Messages.update(docID, {
      $set: {
        read: "true",
        readDate: moment().format("YYYYMMDDhmmss")
      }
    });
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(messages, function () {
    return Messages.find(
      //this is where you restrict access.
      {
        $or: [
          {deleted: null},
          {deleted: "false"}]
      }
    );
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
    max: 100,
    autoform: {
      group: messages,
      placeholder: "subject"
    }
  },
  text: {
    label: "text",
    type: String,
    optional: false,
    autoform: {
      group: messages,
      placeholder: "text",
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  sender: {
    label: "from",
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: messages,
      placeholder: "from"
    }
  },
  receiver: {
    label: "to",
    type: String,
    optional: true,
    max: 100,
    autoform: {
      group: messages,
      placeholder: "to"
    }
  },
  letter: {
    type: String,
    optional: true,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
  },
  read: {
    type: String,
    optional: true,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
  },
  deleted: {
    type: String,
    optional: true,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
    },
  readDate: {
    type: String,
    optional: true,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
  },
  deletedDate: {
    type: String,
    optional: true,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
   },
  created: {
    type: String,
    optional: false,
    autoform: {
      group: messages,
      afFieldInput: {
        hidden: true,
      }
    }
  }
}));
