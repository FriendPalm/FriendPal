Template.ListMessages.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  messageList: function () {
    return Messages.find();
  }
});

Template.ListMessages.events({
  'click .remove': function () {
    Meteor.call("deleteMessage", this._id);
  }
});