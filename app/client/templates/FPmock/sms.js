Template.Messenger.events = {
  /**submit function stolen from: Austin Keeley https://github.com/austinkeeley
   * submit button click event, takes the message and stores it in messages
   * @param e click event
   * @param tmpl the page
   */
  'submit': function (e, tmpl) {
    e.preventDefault();
    var messageRece = tmpl.find("#to").value;
    var messageText = tmpl.find("#chatInput").value;
    var messageSubj = tmpl.find("#subject").value;
    var messageSend = Meteor.user().profile.name;
    if (messageText.length > 500) {
      var messageSMS = "true";
    } else {
      var messageSMS = "false";
    }
    var newMessage = {
      sender: messageSend,
      receiver: messageRece,
      text: messageText,
      subject: messageSubj,
      sms: messageSMS
    };

    // clear out the old message
    tmpl.find("#chatInput").value = "";

    Meteor.call("addMessage", newMessage);
  },
  'click .remove': function () {
    Meteor.call("deleteMessage", this._id);
  },
  'click .learn': function (e, tmpl) {
    e.preventDefault();

    //save form data
    cvalueChat = tmpl.find("#chatInput").value;
    cvalueTo = tmpl.find("#to").value;
    cvalueSubject = tmpl.find("#subject").value;

    document.cookie = "chatField=" + cvalueChat + "; ";
    document.cookie = "toField=" + cvalueTo + "; ";
    document.cookie = "subjectField=" + cvalueSubject + "; ";

    Router.go('Learn');
    //loading done in learn.html
  }
};

Template.Messenger.helpers({
  /**
   * @returns {*} All of the Message documents.
   */
  messageList: function () {
    return Messages.find({
      $or: [
        {receiver: Meteor.user().profile.name},
        {sender: Meteor.user().profile.name}
      ]
    });
  },
  generalMessages: function () {
    return Messages.find({receiver: "general"});
  },
  newMessages: function () {
    return Messages.find({});
  }
});
