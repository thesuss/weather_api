var onReadyEvents = function(){
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

function weatherString (crd.latitude, crd.longitude) {
  weatherList = getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + crd.latitude + '&lon=' + crd.longitude + '&APPID=072af5559931a9dc9c97e0a217a48f07')
}
