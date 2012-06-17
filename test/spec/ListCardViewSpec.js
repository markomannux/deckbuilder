describe("List Cards View", function() {
  
  var view;

  beforeEach(function() {
    view = DeckBuilder.ListCardsView.create();
  });

  it("should show new card fields", function() {
    view.showNew();
    expect(view.get('isNewVisible')).toEqual(true);
  });
  
  it("should hide new card fields", function() {
    view.hideNew();
    expect(view.get('isNewVisible')).toEqual(false);
  });
});
