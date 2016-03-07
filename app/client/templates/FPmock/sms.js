//code courtesy of Austin Keeley https://github.com/austinkeeley

Template.SMS.events = {
  'submit': function (e, tmpl) {
    e.preventDefault();
    console.log("Clicked submit!");

    var newMessage = {
      sender: "user",
      receiver: tmpl.find("#to").value,
      text: tmpl.find("#chatInput").value,
      subject: "foo",
      sms: "true"
    };

    // clear out the old message
    tmpl.find("#chatInput").value = "";
    tmpl.find("#to").value = "";

    Meteor.call("addMessage", newMessage);
  },
  'click .remove': function () {
    Meteor.call("deleteMessage", this._id);
  }
};

Template.SMS.helpers({

  /**
   * @returns {*} All of the Message documents.
   */
  messageList: function () {
    return Messages.find();
  }
});
