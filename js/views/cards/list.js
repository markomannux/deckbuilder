DeckBuilder.ListCardsView = Ember.View.extend({
  templateName:    'list',
  cardsBinding: 'DeckBuilder.cardsController',

  showNew: function() {
    this.set('isNewVisible', true);
  },

  hideNew: function() {
    this.set('isNewVisible', false);
  }
});
