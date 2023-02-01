//fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=671ff5c18f7398c99dc62c7c7e9c4b6c&units=metric").then((response) => response.json()).then((data) => processData(data));

let weather = {
    apiKey: "671ff5c18f7398c99dc62c7c7e9c4b6c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    /*insta location related testing, not working

    VM48:9          GET https://instagram-scraper-2022.p.rapidapi.com/ig/user_id/?user=cr7cristianoronaldo net::ERR_FAILED
(anonymous) @ VM48:9
VM48:12 TypeError: Failed to fetch
    at <anonymous>:9:1
(anonymous) @ VM48:12
Promise.catch (async)
(anonymous) @ VM48:12


  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'del-privacy',
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

fetch('https://instagram28.p.rapidapi.com/hash_tag_medias?hash_tag=' +
 city, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    */

    },

    displayWeather: function (data) {
    JSON.stringify(data);
   // Displays the chosen city

  const h2 = document.createElement('h2');
  h2.innerHTML = "Your chosen city is <br>" + data.name + " .";
  document.getElementById("result").appendChild(h2);

  // Displays the "it feels like temperature" and the actual temperature
  const h3 = document.createElement('h3');
  h3.innerHTML = "The actual temperature is " + data.main.temp + " degrees here, <br> but it feels like " + data.main.feels_like + " degrees.";
  document.getElementById("result").appendChild(h3);


   // Displays the wind speed
  const windSpeed = document.createElement('h4');
  windSpeed.innerHTML = "The wind speed is:<br> " + data.wind.speed;
  document.getElementById("result").appendChild(windSpeed);


  // Displays the clouds
  const clouds = document.createElement('h4');
  clouds.innerHTML = ' Cloudy? <br>' + data.clouds.all + " %<br><br>";
  document.getElementById("result").appendChild(clouds);

   // Sunrise ans sunset

    let unix_timestamp = data.sys.sunrise;
  //multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Will display time in 10:30:23 format
  const formattedSunrise = hours + ':' + minutes.substr(-2);
    //same for the sunset
    let unix_timestamp1 = data.sys.sunset;
  const date1 = new Date(unix_timestamp1 * 1000);
  const hours1 = date1.getHours();
  const minutes1 = "0" + date1.getMinutes();
  const formattedSunset = hours1 + ':' + minutes1.substr(-2);

  const sys = document.createElement('h4');
  sys.innerHTML = "Make some journalling during the sunrise, it is at <br>" + formattedSunrise + ". <br><br> And don't forget to take wine and go to the sea for the sunset, it is at <br>" + formattedSunset + ". <br><br>";
  document.getElementById("result").appendChild(sys);

    const img = document.createElement("img");
  img.src = "https://cdn-icons-png.flaticon.com/512/8330/8330591.png";
  clouds.appendChild(img);
    img.height = 50;
    const image = document.createElement("img");
  image.src = "https://cdn-icons-png.flaticon.com/512/4814/4814444.png";
  sys.appendChild(image);
    image.height = 50;
    const cityphoto = document.createElement("img");
    cityphoto.src = "https://source.unsplash.com/1600x900/?" + data.name;
    document.getElementById("cityscape").appendChild(cityphoto);
      cityphoto.height = 300;
      cityphoto.width = 500;
      cityphoto.style.borderRadius = "25px";

      /*also was testing out insta feature, unsuccessfull
      const insta = document.createElement("img");
  image.src = data.hashtag.profile_pic_url;
  sys.appendChild(insta);
    image.height = 50;*/

    //getting user's input

    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

let geocode = {
    reverseGeocode: function(latitude, longitude) {
            var api_key = '1d50683f969c49ee9ae4043371c21a88';
            var api_url = 'https://api.opencagedata.com/geocode/v1/json'

            var request_url = api_url
              + '?'
              + 'key=' + api_key
              + '&q=' + encodeURIComponent(latitude + ',' + longitude)
              + '&pretty=1'
              + '&no_annotations=1';

            // see full list of required and optional parameters:
            // https://opencagedata.com/api#forward

            var request = new XMLHttpRequest();
            request.open('GET', request_url, true);

            request.onload = function() {
              // see full list of possible response codes:
              // https://opencagedata.com/api#codes

              if (request.status === 200){
                // Success!
                var data = JSON.parse(request.responseText);
                weather.fetchWeather(data.results[0].components.city);
              } else if (request.status <= 500){
                // We reached our target server, but it returned an error

                console.log("unable to geocode! Response code: " + request.status);
                var data = JSON.parse(request.responseText);
                console.log('error msg: ' + data.status.message);
              } else {
                console.log("server error");
              }
            };

            request.onerror = function() {
              // There was a connection error of some sort
              console.log("unable to connect to server");
            };

            request.send();  // make the request
          },
          getLocation: function() {
            function success (data) {
                geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
            }
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, console.error)
            } else {
                weather.fetchWeather("Aarhus");
            }

          }
}


  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });

  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();

      }
    });


    geocode.getLocation();
