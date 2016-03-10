Template.SMS.events = {
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
    var messageSend = "testuser";
    var messageSMS = "true";

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
  }
  /*,
  'click .learn': function (e, tmpl) {
    e.preventDefault();

    var sTo = tmpl.find("#to").value;
    var sChat = tmpl.find("#chatInput").value;
    var sSub = tmpl.find("#subject").value;

    //save form data

    UserFormData.upsert({name: "saveTo"}, {name: "saveTo", value: sTo});
    UserFormData.upsert({name: "saveChat"}, {name:"saveChat", value: sChat});
    UserFormData.upsert({name: "saveSub"}, {name:"saveSub", value: sSub});
    Router.go('Learn');

    //load learn field values
    tmpl.find("#translate").value = UserFormData.find({name:"saveTraslate"});
    tmpl.find("#translated").value = UserFormData.find({name:"saveTraslated"});

  }
  */
};

Template.SMS.helpers({

  /**
   * @returns {*} All of the Message documents.
   */
  messageList: function () {
    return Messages.find();
  }
});
