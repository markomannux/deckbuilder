DeckBuilder.Card = Ember.Object.extend({
  name: 'no name',
  description: 'no description',

  save: function() {
    insertCard(this);
  }
});

DeckBuilder.cardsController = Ember.ArrayController.create({
  content: [new DeckBuilder.Card(), new DeckBuilder.Card()]
});
