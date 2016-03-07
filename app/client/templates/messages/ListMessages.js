Template.ListMessages.helpers({

  /**
   * @returns {*} All of the Message documents.
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