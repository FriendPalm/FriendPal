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
    UserFormData.upsert({name: "saveTraslate"}, {name: "saveTraslate", value: sTraslate});
    UserFormData.upsert({name: "saveTraslated"}, {name: "saveTraslate", value: sTraslated});
    console.log(UserFormData.find({name: "saveTranslate"}));
console.log(UserFormData.find({name:"saveChat"}));
    Router.go('Messenger');

    //load messenger field values
    tmpl.find("#chatInput").value = UserFormData.find({name:"saveChat"});
    tmpl.find("#to").value =        UserFormData.find({name:"saveTo"});
    tmpl.find("#subject").value =   UserFormData.find({name:"saveSub"});

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