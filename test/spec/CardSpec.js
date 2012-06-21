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
      entityManager.initDatabase('TEST_DB', true);
      card.save();
    });

    it("sets id of saved object", function() {
      entityManager.initDatabase('TEST_DB', true);

      runs(function() {
        card.save();
      });

      waitsFor(function() {
        return card.id != undefined;
      }, "The id should be set", 750);

      runs(function() {
        expect(card.get('id')).not.toBe(undefined);
      });
    });
  });
});
