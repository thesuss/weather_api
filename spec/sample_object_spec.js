describe("GetWeather", function() {
  var list;

  beforeEach(function() {
    pos = {lat: 57.71, lon: 11.97};
    list = new GetWeather(pos);
    expectedUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&APPID=072af5559931a9dc9c97e0a217a48f07';
  });

  it("We get a location", function() {
    expect(list.getLocation(pos)).toEqual(expectedUrl);
  });

});
