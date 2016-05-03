Template.Messenger.events = {
  /**submit function stolen from: Austin Keeley https://github.com/austinkeeley
   * submit button click event, takes the message and stores it in messages collection
   * @param e click event
   * @param tmpl the page
   */
  'click .submit': function (e, tmpl) {
    e.preventDefault();
    //console.log("clicked");
    var messageRece = tmpl.find("#to").value;
    var messageText = tmpl.find("#chatInput").value;
    //var messageSubj = tmpl.find("#subject").value;
    var messageSend = Meteor.user().profile.name;
    if (messageText.length > 160) {
      var messageLetter = "true";
    } else {
      var messageLetter = "false";
    }
    var newMessage = {
      sender: messageSend,
      receiver: messageRece,
      text: messageText,
      //subject: messageSubj,
      letter: messageLetter,
      created: moment().format("YYYYMMDDhmmss")
    };
    // clear out the old message
    tmpl.find("#chatInput").value = "";
    Meteor.call("addMessage", newMessage);
  },
  /**
   * Calls meteor function to mark message as deleted
   */
  'click .remove': function () {
    Meteor.call("deleteMessage", this._id);
  },
  /**
   * calls the function to mark the message as read
   */
  'click .dismiss': function () {
    Meteor.call("markRead", this._id);
  },

  /**
   * sidebar to take user to translate page
   * @param e
   * @param tmpl
   */
  'click .learn': function (e, tmpl) {
    e.preventDefault();

    //save form data
    cvalueChat = tmpl.find("#chatInput").value;
    cvalueTo = tmpl.find("#to").value;
    //cvalueSubject = tmpl.find("#subject").value;

    document.cookie = "chatField=" + cvalueChat + "; ";
    document.cookie = "toField=" + cvalueTo + "; ";
    //document.cookie = "subjectField=" + cvalueSubject + "; ";

    Router.go('Learn');
    //loading done in learn.html
  },
  /**
   * set to field to equal the id of the selected dropdown item
   * @param e event
   * @param tmpl page markup
   */
  'click .toDropdown': function (e, tmpl) {
    tmpl.find("#to").value = e.currentTarget.id;
    tmpl.find("#contactDrop").display = 'none';
  }
};

Template.Messenger.helpers({
  /**
   * @returns {*} non letters that have been sent of received by the current user.
   */
  messageList: function () {
    return Messages.find({
      $and: [{
        $or: [
          {letter: "false"},
          {letter: null}
        ]
      }, {
        $or: [
          {receiver: Meteor.user().profile.name},
          {sender: Meteor.user().profile.name}
        ]
      }, {receiver: {$not: "general"}}
      ]
    }, {sort: {created: -1}})
  },
  /**
   * messages sent to general or no one
   * @returns a cursor
   */
  generalMessages: function () {
    return Messages.find(
      {
        $or: [
          {receiver: "general"},
          {receiver: ""},
          {receiver: null}]
      });
  },
  /**
   *
   * @returns long messages that have been received by the current user and not viewed or dismissed
   */
  newMessages: function () {
    return Messages.find({
      $and: [
        {read: null},
        {receiver: Meteor.user().profile.name},
        {letter: "true"}
      ]
    });
  },
  /**
   *
   * @returns long messages that have been received by the current user
   */
  recLetters: function () {
    return Messages.find({
      $and: [
        {letter: "true"},
        {receiver: Meteor.user().profile.name}
      ]
    });
  },

  /**
   *
   * @returns long messages that have been sent by the current user
   */
  sentLetters: function () {
    return Messages.find({
      $and: [
        {letter: "true"},
        {sender: Meteor.user().username}
      ]
    });
  },
  /**
   * @returns {*} current user's contact list.
   */
  contactList: function () {
    return Meteor.users.find({_id: Meteor.user()._id}).fetch()[0].contacts;
  },
  /**
   * @returns {*} current user's list of people who have sent him/her a message.
   */
  recentList: function () {
    return (_.uniq(_.pluck(Messages.find({$and:[{receiver: Meteor.user().profile.name},{created: {$gt: moment().subtract(1, 'day').format("YYYYMMDDhmmss")}}]}).fetch(), "sender")));
  },

  matchConList: function() {

  },
});
