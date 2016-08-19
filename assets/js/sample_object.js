function GetWeather(pos) {
    $('button').on('click', function () {
      getLocation(pos);
    });
};

function getLocation(pos) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      showPosition(position.coords.latitude, position.coords.longitude);
    });
  } else {
    $('#place').html('Place not found');
  }
}

//var loadJSONstring = function() {
//weatherList = getJSON('http://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&APPID=072af5559931a9dc9c97e0a217a48f07')
//}
