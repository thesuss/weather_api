var onReadyEvents = function(){
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  function success(pos) {
    crd = pos.coords;
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    lat = crd.latitude.toFixed(2);
    long = crd.longitude.toFixed(2);
    url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=072af5559931a9dc9c97e0a217a48f07&units=metric'

  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};

// function weatherString(url) {
//   //  weatherList = getJSON('url')
//     $.ajax({
//       dataType: "jsonp",
//       url: url,
//       type: 'GET',
//       cache: false,
//       success: function (data) {
//         place = data.name
//         $('#place').html(place);
//         info = data.weather[0].main;
//         $('#info').html(info);
//         description = data.weather[0].description;
//         $('#description').html(description);
//         temperature = data.main.temp.toFixed(1);
//         $('#temperature').html(temperature);
//       },
//       error: function (dataError) {
//         alert("No weather data");
//       }
//     };
//   };
