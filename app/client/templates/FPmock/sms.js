Template.SMS.events = {
  /**code courtesy of Austin Keeley https://github.com/austinkeeley
   * submit button click event, takes the message and stores it in messages
   * @param e click event
   * @param tmpl the page
   */
  'submit': function (e, tmpl) {
    e.preventDefault();
    var messageRece = tmpl.find("#to").value;
    var messageText = tmpl.find("#chatInput").value;
    var messageSubj = tmpl.find("#subject").value;
    var messageSend = "testuser"
    var messageSMS  = "true"

    var newMessage = {
      sender: messageSend,
      receiver: messageRece,
      text: messageText,
      subject: messageSubj,
      sms: messageSMS
    };

    // clear out the old message
    tmpl.find("#chatInput").value = "";
    tmpl.find("#to").value = "";

    Meteor.call("addMessage", newMessage);
  },
  'click .remove': function () {
    Meteor.call("deleteMessage", this._id);
  },
  'click .learn': function (e, tmpl) {
  e.preventDefault();

  //save form data
  var saveTraslate = tmpl.find("#to").value;
  var saveTraslated = tmpl.find("#chatInput").value;
  var saveTraslated = tmpl.find("#subject").value;

  Router.go('Learn');
    //load learn field values
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
