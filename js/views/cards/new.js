DeckBuilder.NewCardView = Ember.View.extend({
  tagName:      'form',
  templateName: 'edit',

  init: function() {
    this._super();
    this.set("card", DeckBuilder.Card.create());
  },
  
  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get("parentView").hideNew();
  },

  submit: function(event) {
    var self = this;
    var card = this.get("card");

    event.preventDefault();

    //TODO save the card

  }
});
