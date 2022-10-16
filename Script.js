// User will give input(ex-dhanbad)
// take that input value and do FETCH FOR THAT CITY and Store it in a variable "response"
// Now RESPONSE variable has the data for the searched city(ex-dhanbad)
// Then we need to display/update the screen, right?
// so then we need to call that function i.e 'displayWeather( variable RESPONSE )' then and only it will update the screen, okay


// search button click
// ---> fetch
// -----> display


let response;

let weather = {
    apikey: "3117a38c9ad253c9c4081dac2d3c37a8",

    // fetch weather data from the API
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey)

            .then((response) => response.json())
            .then((data) => response = data);

    },

    // display the weather updates on the screen
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed:" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = " url('https://source.unsplash.com/1600x900/?" + name + "')"
    },

    // Take the input value and do the fetching and displaying
    search: function () {
        const userInputValue = document.querySelector(".search-bar");

        this.fetchWeather(userInputValue.value) //go fetch weather as per the city
        this.displayweather(response) // display weather for the response
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search(); //On button click run the SEARCH FUNCTION
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search(); //On enter also run the SEARCH FUNCTION
    }

});