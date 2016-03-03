Template.ListMessages.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  messageList: function () {
    return Messages.find();
  }
});