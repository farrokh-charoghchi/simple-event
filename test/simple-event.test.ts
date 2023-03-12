import SimpleEvent from "../src/simple-event"

/**
 * Test Event Fires
 */
describe("Dummy test", () => {
  
  it("SimpleEvent is instantiable", () => {
    expect(new SimpleEvent()).toBeInstanceOf(SimpleEvent)
  })
  var xx=10;
  it("emmition works", () => {
    var ev = new SimpleEvent();
    var handler = jest.fn()
    ev.subscribe(handler);
    ev.emit(xx);
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith([xx]);
  })
})