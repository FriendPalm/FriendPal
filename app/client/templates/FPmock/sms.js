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
      letter: messageSMS
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
  },

  'click .letter': function (e) {
    //mark letter as read
    Meteor.call("markRead", this._id);
  }
};

Template.Messenger.helpers({
  /**
   * @returns {*} non letters that have been sent of received by the current user.
   */
  messageList: function () {
    return Messages.find({
      $and: [
        {
          $or: [
            {letter: "false"},
            {letter: null}
          ]
        },
        {
          $or: [
            {receiver: Meteor.user().profile.name},
            {sender: Meteor.user().profile.name}
          ]
        }]
    })
  },
  generalMessages: function () {
    return Messages.find(
      {
        $or: [
          {receiver: "general"},
          {receiver: ""},
          {receiver: null}]
      });
  },
  newMessages: function () {
    return Messages.find({
      $and: [
        {read: null},
        {receiver: Meteor.user().profile.name}
      ]
    });
  },
  allLetters: function () {
    return Messages.find({
      $and: [
        {letter: "true"},
        {receiver: Meteor.user().profile.name}
      ]
    });
  },
  sentLetters: function(){

  }
});
