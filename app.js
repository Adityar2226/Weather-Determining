let weather = {
  apikey: "aefbad3d5ca8f7aa1208da120946f8be",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector('.description').innerText=description;
      document.querySelector('.temp').innerText=temp+'°C';
      document.querySelector('.humidity').innerText='Humidity: '+humidity+'%';
      document.querySelector('.wind').innerText='Wind speed: '+ speed +' km/hr';
      document.querySelector('.weather').classList.remove('loading');
      document.body.style.backgroundImage="url('https://source.unsplash.com/1920x1080/?"+ name +"')";

  },
  search: function(){
this.fetchWeather(document.querySelector('.search-bar').value);

  }
}; // will be used to store functions and variables that will be useful to store API


document.querySelector('.search button').addEventListener('click',()=>weather.search());

document.querySelector('.search').addEventListener('keyup',function(event){
if (event.key==='Enter'){
    weather.search();
}
})

weather.fetchWeather('denver');