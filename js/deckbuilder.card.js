DeckBuilder.Card = Ember.Object.extend({
  name: 'no name',
  description: 'no description'
});

DeckBuilder.cardsController = Ember.ArrayController.create({
  content: [new DeckBuilder.Card(), new DeckBuilder.Card()]
});
