DeckBuilder.Card = Ember.Object.extend({
  id: undefined,
  name: 'no name',
  description: 'no description',

  save: function() {
    entityManager.insertCard(this);
  }
});

DeckBuilder.cardsController = Ember.ArrayController.create({
  content: [new DeckBuilder.Card(), new DeckBuilder.Card()]
});
