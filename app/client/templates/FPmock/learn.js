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

    var sTraslate = tmpl.find("#translate").value;
    var sTraslated = tmpl.find("#translated").value;

    //save form data
    UserFormData.upsert({name: "saveTraslat"}, {value: sTraslate});
    UserFormData.upsert({name: "saveTraslated"}, {value: sTraslated});
    console.log(UserFormData.find({name: "saveTranslate"}));

    Router.go('Messenger');

    //load messenger field values
    tmpl.find("#chatInput").value = Session.get('saveChat');
    tmpl.find("#to").value = Session.get('saveTo');
    tmpl.find("#subject").value = Session.get('saveSub');

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