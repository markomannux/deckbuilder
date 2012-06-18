describe("Card", function() {
  var card;
  
  beforeEach(function() {
    card = DeckBuilder.Card.create();
  });

  it("should have a default name", function(){
    expect(card.get('name')).toEqual('no name');
  });

  it("can change name", function() {
    card.set('name', 'another card');
    expect(card.get('name')).toEqual('another card');
  });

  it("should have a default description", function(){
    expect(card.get('description')).toEqual('no description');
  });

  it("can change description", function() {
    card.set('description', 'some card description');
    expect(card.get('description')).toEqual('some card description');
  });

  describe("Has persistance behavior", function() {
    it("can be saved", function() {
      initDatabase('TEST_DB', true);
      card.save();
    });
  });
});
