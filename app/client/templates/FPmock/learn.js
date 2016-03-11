/**
 * Created by symor on 3/7/2016.
 */

Template.Learn.events = {
  'click .submit': function (e, tmpl) {
    e.preventDefault();

    var message = tmpl.find("#translate").value;

    // clear out the old message
    tmpl.find("#translated").value = message;

    //Meteor.call("translateMessage", message);
    //if has translated text->print;
    //else query google, store->print
  },
  'click .talk': function (e, tmpl) {
    e.preventDefault();
    //save form data
    cvalueTranslate = tmpl.find("#translate").value;
    cvalueTranslated = tmpl.find("#translated").value;
    document.cookie = "translateField=" + cvalueTranslate + "; ";
    document.cookie = "translatedField=" + cvalueTranslated + "; ";

    Router.go('Messenger');
    //load done in sms.html
  }
};

Template.Learn.helpers({
  /**
   * @returns {*} All of the Message documents.
   */
  messageList: function () {
    return Messages.find();
  }
});