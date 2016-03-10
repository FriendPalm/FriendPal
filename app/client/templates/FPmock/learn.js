/**
 * Created by symor on 3/7/2016.
 */

Template.Learn.events = {
  'click .submit': function (e, tmpl) {
    e.preventDefault();
    console.log("Clicked submit!");

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
    Session.set({saveTraslate: tmpl.find("#translate").value, saveTraslated: tmpl.find("#translated").value});


    Router.go('Messenger');
    //load messenger field values
    tmpl.find("#chatInput").value = Session.get("saveChat");
    tmpl.find("#to").value = Session.get("saveTo");
    tmpl.find("#subject").value = Session.get("saveSub");

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