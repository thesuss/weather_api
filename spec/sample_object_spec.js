describe("GetWeather", function() {

  function success(pos) {
    crd = pos.coords;
    lat = crd.latitude.toFixed(2);
    long = crd.longitude.toFixed(2);
  };

  beforeEach(function(pos) {
    navigator.geolocation.getCurrentPosition(pos);
    crd = pos.coords;
    lat = crd.latitude.toFixed(2);
    long = crd.longitude.toFixed(2);
    expectedUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=072af5559931a9dc9c97e0a217a48f07';
  });


  it("We get a lat-location", function() {
    expect(lat).toEqual(57.69);
  });

  it("We get a long-location", function() {
    expect(lat).toEqual(11.97);
  });

  it("we get json from API", function (lat, long) {
    expect(weatherString(lat,long)).toEqual(expectedUrl);
  });

});
